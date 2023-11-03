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
import { useLocation } from "react-router"
import Test from "@/pages/Test"
import { useEffect, useState } from "react"


export function TabsDemo() {

  const [selectedTab, setSelectedTab] = useState<string>("word")
  const [hashtag, setHashtag] = useState<string[]>([])

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab)
    setHashtag([tab])
  }

  const location = useLocation();
  console.log(location.pathname)

  console.log(hashtag)

  useEffect(() => {

    setHashtag([selectedTab]);
  }, [selectedTab]);
  return (
    <Tabs defaultValue={selectedTab} className="w-[1000px] -translate-x-7 flex flex-col justify-center">
      <Label htmlFor="news" style={{ fontWeight: 'bold', fontSize: '1.2rem' }} className="pb-4">News</Label>
      <TabsList className="flex space-x-4 max-w-5xl">
        <TabsTrigger value="word" onClick={() => handleTabClick("word")}>Word</TabsTrigger>
        <TabsTrigger value="asia" onClick={() => handleTabClick("asia")}>Asia</TabsTrigger>
        <TabsTrigger value="africa" onClick={() => handleTabClick("africa")}>Africa</TabsTrigger>
        <TabsTrigger value="america" onClick={() => handleTabClick("america")}>America</TabsTrigger>
        <TabsTrigger value="europe" onClick={() => handleTabClick("europe")}>Europe</TabsTrigger>
        <TabsTrigger value="war" onClick={() => handleTabClick("war")}>War</TabsTrigger>
        <TabsTrigger value="censorship" onClick={() => handleTabClick("censorship")}>Censorship</TabsTrigger>
        <TabsTrigger value="dictatorship" onClick={() => handleTabClick("dictatorship")}>Dictatorship</TabsTrigger>
        <TabsTrigger value="newsletter" style={{ marginLeft: 'auto', fontWeight: 'bold' }}>Newsletter</TabsTrigger>
      </TabsList>
      <TabsContent value="word" onClick={() => handleTabClick("word")}>
        <Label htmlFor="news">
          <Test hashtag={hashtag}/>
        </Label>
      </TabsContent>
      <TabsContent value="asia" onClick={() => handleTabClick("asia")}>
        <Label htmlFor="news">
        <Test hashtag={hashtag}/>
        </Label>
      </TabsContent>
      <TabsContent value="africa" onClick={() => handleTabClick("africa")}>
        <Label htmlFor="news">
        <Test hashtag={hashtag}/>
        </Label>
      </TabsContent>
      <TabsContent value="america" onClick={() => handleTabClick("america")}>
        <Label htmlFor="news">
        <Test hashtag={hashtag}/>
        </Label>
      </TabsContent>
      <TabsContent value="europe" onClick={() => handleTabClick("europe")}>
        <Label htmlFor="news">
        <Test hashtag={hashtag}/>
        </Label>
      </TabsContent>
      <TabsContent value="war">
        <Label htmlFor="news">
        <Test hashtag={hashtag}/>
        </Label>
      </TabsContent>
      <TabsContent value="censorship">
        <Label htmlFor="news">
        <Test hashtag={hashtag}/>
        </Label>
      </TabsContent>
      <TabsContent value="dictatorship">
        <Label htmlFor="news">
        <Test hashtag={hashtag}/>
        </Label>
      </TabsContent>
      <TabsContent value="newsletter">
        <Label htmlFor="news">
        <Test hashtag={hashtag}/>
        </Label>
      </TabsContent>
    </Tabs>
  )
}
