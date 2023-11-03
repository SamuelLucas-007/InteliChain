import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation } from "react-router";
import Test from "@/pages/Test";
import { useEffect, useState } from "react";

export function TabsDemo() {
  const [selectedTab, setSelectedTab] = useState<string>("world");
  const [hashtag, setHashtag] = useState<string[]>([]);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    setHashtag([tab]);
  };

  const location = useLocation();
  console.log(location.pathname);

  console.log(hashtag);

  useEffect(() => {
    setHashtag([selectedTab]);
  }, [selectedTab]);
  return (
    <div className="flex">
      <h1 className="flex font-inter font-bold text-[30px]">News</h1>
      <Tabs
        defaultValue={selectedTab}
        className="w-[700px] -translate-x-20 border bg-white rounded-md text-black translate-y-12"
      >
        <TabsList className="flex space-x-7 bg-white text-black font-inter bold text-[100px]">
          <TabsTrigger
            className="font-inter font-bold text-[12px]"
            value="world"
            onClick={() => handleTabClick("world")}
          >
            World
          </TabsTrigger>
          <TabsTrigger
            className="font-inter font-bold text-[12px]"
            value="asia"
            onClick={() => handleTabClick("asia")}
          >
            Asia
          </TabsTrigger>
          <TabsTrigger
            className="font-inter font-bold text-[12px]"
            value="africa"
            onClick={() => handleTabClick("africa")}
          >
            Africa
          </TabsTrigger>
          <TabsTrigger
            className="font-inter font-bold text-[12px]"
            value="europe"
            onClick={() => handleTabClick("europe")}
          >
            Europe
          </TabsTrigger>
          <TabsTrigger
            className="font-inter font-bold text-[12px]"
            value="war"
            onClick={() => handleTabClick("war")}
          >
            War
          </TabsTrigger>
          <TabsTrigger
            className="font-inter font-bold text-[12px]"
            value="censorship"
            onClick={() => handleTabClick("censorship")}
          >
            Censorship
          </TabsTrigger>
          <TabsTrigger
            className="font-inter font-bold text-[12px]"
            value="newsletter"
            style={{ marginLeft: "auto", fontWeight: "bold" }}
          >
            Newsletter
          </TabsTrigger>
        </TabsList>
        <TabsContent value="world" onClick={() => handleTabClick("world")}>
          <Label htmlFor="news">
            <Test hashtag={hashtag} />
          </Label>
        </TabsContent>
        <TabsContent value="asia" onClick={() => handleTabClick("asia")}>
          <Label htmlFor="news">
            <Test hashtag={hashtag} />
          </Label>
        </TabsContent>
        <TabsContent value="africa" onClick={() => handleTabClick("africa")}>
          <Label htmlFor="news">
            <Test hashtag={hashtag} />
          </Label>
        </TabsContent>
        <TabsContent value="europe" onClick={() => handleTabClick("europe")}>
          <Label htmlFor="news">
            <Test hashtag={hashtag} />
          </Label>
        </TabsContent>
        <TabsContent value="war">
          <Label htmlFor="news">
            <Test hashtag={hashtag} />
          </Label>
        </TabsContent>

        <TabsContent value="newsletter">
          <Label htmlFor="news">
            <Test hashtag={hashtag} />
          </Label>
        </TabsContent>
      </Tabs>
    </div>
  );
}
