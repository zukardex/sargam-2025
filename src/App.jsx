import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const App = () => {
  return (
    <div>
      <h1 className='text-2xl bg-red-500'>Sargam 2025</h1>
      <div className='flex justify-center items-center min-h-screen mx-auto'>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      </div>
    </div>
  )
}

export default App