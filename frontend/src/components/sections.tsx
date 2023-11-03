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

export function TabsDemo() {
  return (
    <div className="flex items-center justify-start">
      <h1 className="text-[25px] font-italic font-extrabold">News</h1>
      <Tabs
        defaultValue="account"
        className="flex items-start w-[700px] -translate-x-20 translate-y-14 border bg-white rounded-md text-black"
      >
        {/* <Label htmlFor="news" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>News</Label> */}
        <TabsList className="flex space-x-7 bg-white text-black font-inter font-bold text-[100px]">
          <TabsTrigger value="world" className="font-inter font-bold">
            World
          </TabsTrigger>
          <TabsTrigger value="asia" className="font-inter font-bold">
            Asia
          </TabsTrigger>
          <TabsTrigger value="africa" className="font-inter font-bold">
            Africa
          </TabsTrigger>
          <TabsTrigger value="war" className="font-inter font-bold">
            War
          </TabsTrigger>
          <TabsTrigger value="censorship" className="font-inter font-bold">
            Censorship
          </TabsTrigger>
          <TabsTrigger value="newsletter"  className="font-inter font-bold styled-">
            Newsletter
          </TabsTrigger>
        </TabsList>
        <TabsContent value="world" className="flex flex-row white-background ">
          <Label htmlFor="news">Cards do phd sobre mundo</Label>
        </TabsContent>
        <TabsContent value="asia">
          <Label htmlFor="news">Cards do phd sobre asia</Label>
        </TabsContent>
        <TabsContent value="africa">
          <Label htmlFor="news">Cards do phd sobre africa</Label>
        </TabsContent>
        <TabsContent value="america">
          <Label htmlFor="news">Cards do phd sobre america</Label>
        </TabsContent>
        <TabsContent value="europe">
          <Label htmlFor="news">Cards do phd sobre europa</Label>
        </TabsContent>
        <TabsContent value="war">
          <Label htmlFor="news">Cards do phd sobre guerra</Label>
        </TabsContent>
        <TabsContent value="censorship">
          <Label htmlFor="news">Cards do phd sobre censura</Label>
        </TabsContent>
        <TabsContent value="dictatorship">
          <Label htmlFor="news">Cards do phd sobre ditadura</Label>
        </TabsContent>
        <TabsContent value="newsletter">
          <Label htmlFor="news">Cards do phd sobre newletter</Label>
        </TabsContent>
      </Tabs>
    </div>
  );
}
