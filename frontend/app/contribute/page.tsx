"use client";

import { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import MarkdownEditor from "@/components/custom/common/MdEditor/MarkdownEditor";
import TechTagSelect from "@/components/custom/common/select/TechTagSelect";
import { GitRepo, SkillTagtype } from "@/types";
import useSkillTags from "@/hooks/useSkillTags";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import DevModeOn from "@/components/custom/common/progress/DevModeOn";
import { IoMdEye } from "react-icons/io";
import { FaForwardStep } from "react-icons/fa6";
import { ForwardIcon, Loader2 } from "lucide-react";
import useRepo from "@/hooks/useRepo";
import { useUser } from "@clerk/nextjs";
import GitRepoSelect from "@/components/custom/common/select/GitRepoSelect";
import { TbCloudDownload } from "react-icons/tb";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getReadme } from "@/actions/repo";
import { DefaultGuidelines } from "@/constants/constant";
import toast from "react-hot-toast";
import { Template, useTemplateStore } from "@/provider/store/useTemplateStore";
import { useRouter } from "next/navigation";
import TemplateAction from "@/actions/template";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(100, { message: "Description is required" }),
  guidelines: z.string().optional(),
});

const useCreateTemplateMutation = () => {
  return useMutation({
    mutationFn: async (template: Template) => {
      const res = await TemplateAction.createTemplate(template);
      return res;
    },
  });
};

const MultiPageForm = () => {
  const { user, isLoaded } = useUser();
  const createTemplateMutation = useCreateTemplateMutation();
  const router = useRouter();
  const { template, setTemplate, updateTemplate, clearTemplate } =
    useTemplateStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [guidelines, setGuidelines] = useState<string | undefined>(
    template?.guidelines || DefaultGuidelines
  );
  const { skillTags } = useSkillTags();
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState<SkillTagtype[]>(template?.tags || []);
  const [suggestions, setSuggestions] = useState<SkillTagtype[]>(skillTags);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  const [tabActive, setTabActive] = useState("templates");
  const [preview, setPreview] = useState(false);
  const [repoSelected, setRepoSelected] = useState<GitRepo | null>(null);
  const { repo } = useRepo(
    user?.publicMetadata?.githubToken as string,
    isLoaded as boolean
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: template?.name || repoSelected?.name || "",
      description: template?.description || repoSelected?.description || "",
      guidelines: template?.guidelines || guidelines || "",
    },
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!template) {
        setTemplate({
          name: "",
          description: "",
          guidelines: DefaultGuidelines,
          tags: [],
          repo: null,
          createdById: (user?.id as string) || "",
        });
      } else {
        form.setValue("name", template.name);
        form.setValue("description", template.description);
        form.setValue("guidelines", template.guidelines || "");
        setTags(template.tags);
        setRepoSelected(template.repo);
        setGuidelines(template.guidelines || DefaultGuidelines);
        updateTemplate({ createdById: user?.id as string });
      }
    }); // Adjust the timeout duration as needed

    return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount
  }, []);

  const {
    refetch: fetchReadme,
    data: readme,
    error,
    isLoading: isReadmeLoading,
  } = useQuery({
    queryKey: ["readme"],
    queryFn: async () => {
      const readme = await getReadme(
        user?.publicMetadata?.githubToken as string,
        repoSelected?.name as string,
        repoSelected?.owner?.login as string
      );
      form.setValue("guidelines", readme.data);
      setGuidelines(readme.data);
      updateTemplate({ guidelines: readme.data });
      return readme.data;
    },

    staleTime: 1000 * 60 * 1, // Data is considered fresh for 5 minutes

    enabled: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setActiveIndex(-1); // Reset active index

    if (value.trim()) {
      const filteredSuggestions = skillTags.filter(
        (tag) =>
          tag.name.toLowerCase().includes(value.toLowerCase()) &&
          !tags.some((t) => t.id === tag.id)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleAddTag = (tag: SkillTagtype) => {
    setTags((prev) => [...prev, tag]);
    setQuery("");
    setSuggestions([]);
    setActiveIndex(-1); // Reset active index
    updateTemplate({ tags: [...tags, tag] });
  };

  const handleRemoveTag = (tagId: number) => {
    const updatedTags = tags.filter((t) => t.id !== tagId);
    setTags(updatedTags);
    updateTemplate({ tags: updatedTags });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleAddTag(suggestions[activeIndex]);
    }
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    if (query.trim() === "") {
      const remainingSuggestions = skillTags.filter(
        (tag) => !tags.some((t) => t.id === tag.id)
      );
      setSuggestions(remainingSuggestions);
    }
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const formData = { ...data, tags, guidelines, repo: repoSelected };
    updateTemplate(formData);

    toast.promise(createTemplateMutation.mutateAsync(template as Template), {
      loading: "Creating Template...",
      success: "Template Created!",
      error: "Error Creating Template",
    });

    router.push(`/templates`);

    clearTemplate();
  };

  return (
    <div className="flex relative flex-col w-full font-openSans items-center justify-center">
      <div
        onClick={() => router.push(`/contribute/${template?.id}/preview`)}
        className=" absolute top-[1rem] right-[1.5rem] flex items-center gap-[.5rem] bg-white px-[.5rem] py-[.3rem] rounded-full text-[.8rem] cursor-pointer text-black/80"
      >
        <IoMdEye className=" text-[1.02rem] " />
        Preview
      </div>

      <Tabs defaultValue="templates" className="mt-[1rem] w-full px-[5rem] ">
        <TabsList className="w-fit sticky top-[1rem] flex justify-center mx-auto">
          <TabsTrigger
            value="templates"
            onClick={() => setTabActive("templates")}
            className=" data-[state=active]:text-white/80 "
          >
            Templates
          </TabsTrigger>
          <TabsTrigger
            value="blogs"
            className=" data-[state=active]:text-white/80 "
            onClick={() => setTabActive("blogs")}
          >
            Blogs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="templates">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" mx-auto font-openSans   mt-[3rem]"
            >
              {/* Page 1: Template Details */}
              {currentPage === 1 && (
                <div className="flex mx-auto flex-col bg-[#171717] p-[1.5rem] rounded-[.5rem] w-[35rem] gap-[1rem]">
                  <h2 className="text-white/40">Repository</h2>
                  {/* Name Field */}

                  <GitRepoSelect
                    options={repo}
                    handleSelectType={(selectedRepo) => {
                      setRepoSelected(selectedRepo);
                      form.setValue("name", selectedRepo.name);
                      form.setValue(
                        "description",
                        selectedRepo.description || ""
                      );
                      updateTemplate({
                        name: selectedRepo.name,
                        description: selectedRepo.description || "",
                        repo: selectedRepo,
                      });
                    }}
                    selected={repoSelected as GitRepo}
                  />

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/40">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter template name"
                            {...field}
                            className="bg-[#2b2a2a] border-white/10 text-white/50"
                            onChange={(e) => {
                              field.onChange(e);
                              updateTemplate({ name: e.target.value });
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Description Field */}
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/40">
                          Description
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter template description"
                            {...field}
                            className="bg-[#2b2a2a] border-white/10 text-white/50"
                            onChange={(e) => {
                              field.onChange(e);
                              updateTemplate({ description: e.target.value });
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Tech Tags */}
                  <div className="mt-[1rem]">
                    <TechTagSelect
                      activeIndex={activeIndex}
                      handleAddTag={handleAddTag}
                      handleKeyDown={handleKeyDown}
                      handleInputChange={handleInputChange}
                      query={query}
                      suggestions={suggestions}
                      tags={tags}
                      handleRemoveTag={handleRemoveTag}
                      handleInputFocus={handleInputFocus}
                      isLabled={false}
                    />
                  </div>
                </div>
              )}

              {/* Page 2: Markdown Editor */}
              {currentPage === 2 && (
                <div className="flex mt-[-3rem] flex-col gap-[1rem]">
                  <Button
                    type="button"
                    variant={"secondary"}
                    className="h-[2.3rem] w-fit px-[.7rem] text-[.8rem]"
                    onClick={() => fetchReadme()} // Trigger the query on button click
                    disabled={isReadmeLoading} // Disable button while loading
                  >
                    {isReadmeLoading ? (
                      <Loader2 className="animate-spin mr-2 h-4 w-4" /> // Spinner
                    ) : (
                      <TbCloudDownload className=" " />
                    )}
                    {isReadmeLoading
                      ? "Loading..."
                      : readme
                      ? "Readme Imported"
                      : "Import Readme"}
                  </Button>
                  <FormField
                    control={form.control}
                    name="guidelines"
                    render={() => (
                      <FormItem>
                        <FormLabel className="text-white/80 flex gap-[.5rem] items-center ">
                          {/* Guidelines */}
                        </FormLabel>
                        <MarkdownEditor
                          value={guidelines || DefaultGuidelines}
                          onChange={(value) => {
                            setGuidelines(value || "");
                            updateTemplate({ guidelines: value || "" });
                          }}
                          height={450}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between w-[35rem] mx-auto mt-[2rem]">
                {currentPage > 1 && (
                  <Button
                    type="button"
                    // variant="secondary"
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                  >
                    <ForwardIcon className=" rotate-180 " />
                    Back
                  </Button>
                )}
                {currentPage < 2 && (
                  <Button
                    type="button"
                    variant="secondary"
                    disabled={form.formState.isValid ? false : true}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                  >
                    Next
                    <ForwardIcon />
                  </Button>
                )}
                {currentPage === 2 && (
                  <Button type="submit" className=" bg-[#018cff] ">
                    Submit
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </TabsContent>

        <TabsContent value="blogs">
          <div className="flex relative mt-[8rem] w-fit mx-auto h-fit">
            <DevModeOn />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MultiPageForm;
