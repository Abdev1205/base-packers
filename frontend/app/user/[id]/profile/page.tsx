"use client";

import UserAction from "@/actions/user";
import NotLoggedIn from "@/components/custom/common/NotLoggedIn";
import { Button } from "@/components/ui/button";
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
import useUserData from "@/hooks/useUserData";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  about: z.string().min(100, { message: "About is required" }),
});

const useUserProfileMutataion = () => {
  return useMutation({
    mutationFn: async (User: {
      username: string;
      name: string;
      about: string;
    }) => {
      const res = await UserAction.updateUserProfile(User);
      return res;
    },
  });
};
const UserProfileInnerPage = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const userProfileMutataion = useUserProfileMutataion();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      about: "",
    },
  });
  const {
    userProfileData,
    isUserProfileLoading,
    isUserProfileFetching,
    refetchUserProfile,
  } = useUserData(user?.username || "");

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const formData = { ...data, username: user?.username as string };
    console.log("UserProfile Update Data", formData);

    toast.promise(userProfileMutataion.mutateAsync(formData), {
      loading: "Updating User Profile...",
      success: "User Profile Updated!",
      error: "Error Updating User Profile",
    });

    router.push(`/user/${user?.username}`);
  };

  useEffect(() => {
    if (user && isLoaded) {
      refetchUserProfile();
    }
  }, [user, isLoaded]);

  useEffect(() => {
    if (userProfileData) {
      form.setValue("name", userProfileData.name);
      form.setValue("about", userProfileData.about as string);
    }
  }, [userProfileData]);

  // console.log("User Profile Inner Page", userProfileData);

  if (isLoaded && !isSignedIn) {
    return <NotLoggedIn />;
  }

  return (
    <div className=" min-h-[calc(100vh-20rem)] z-[30] text-white flex flex-col px-[5rem] ">
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" mx-auto font-openSans   mt-[3rem]"
          >
            {/* Page 1: Template Details */}
            <div className="flex mx-auto flex-col bg-[#171717] p-[1.5rem] rounded-[.5rem] w-[35rem] gap-[1rem]">
              <h2 className="text-white/40 text-[1.2rem] ">User Profile</h2>
              {/* Name Field */}

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/40">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        className="bg-[#2b2a2a] border-white/10 text-white/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description Field */}
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/40">About </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself"
                        {...field}
                        className="bg-[#2b2a2a] border-white/10 text-white/50 h-[10rem] "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={!form.formState.isValid}
                variant={"secondary"}
                className="  "
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UserProfileInnerPage;
