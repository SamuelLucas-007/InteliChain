import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import PostCard from "./postcard"

export function TabsDemo() {
  return (
    <Tabs defaultValue="word" className="w-[1000px] -translate-x-7 flex flex-col justify-center">
      <Label htmlFor="news" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>News</Label>
      <TabsList className="flex space-x-4 max-w-5xl">
        <TabsTrigger value="word">Word</TabsTrigger>
        <TabsTrigger value="asia">Asia</TabsTrigger>
        <TabsTrigger value="africa">Africa</TabsTrigger>
        <TabsTrigger value="america">America</TabsTrigger>
        <TabsTrigger value="europe">Europe</TabsTrigger>
        <TabsTrigger value="war">War</TabsTrigger>
        <TabsTrigger value="censorship">Censorship</TabsTrigger>
        <TabsTrigger value="dictatorship">Dictatorship</TabsTrigger>
        <TabsTrigger value="newsletter" style={{ marginLeft: 'auto', fontWeight: 'bold' }}>Newsletter</TabsTrigger>
      </TabsList>
      <TabsContent value="word">
        <Label htmlFor="news">
          <PostCard />
        </Label>
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
  )
}
