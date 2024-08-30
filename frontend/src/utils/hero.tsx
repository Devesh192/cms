import { Button } from "../components/ui/button"
import { ArrowRight, Code, Users } from "lucide-react"
import React from "react"

export default function Component() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground relative">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            Coder Matters: Empowering Developers
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Join a community that values code quality, collaboration, and continuous learning. Because every line of code matters.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                Join the Community
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] bg-muted rounded-full flex items-center justify-center">
                            <span className="text-muted-foreground text-lg">Image Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-4 bottom-4 lg:left-8 lg:bottom-8">
                <div className="bg-primary text-primary-foreground p-2 rounded-full">
                    <Code className="h-6 w-6" />
                </div>
            </div>
            <div className="absolute right-4 bottom-4 lg:right-8 lg:bottom-8">
                <div className="bg-muted p-2 rounded-full">
                    <Users className="h-6 w-6 text-muted-foreground" />
                </div>
            </div>
        </section>
    )
}