import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Facebook, Twitter, Github, Mail, Lock, User } from 'lucide-react'

export default function AuthPages() {
    const [activeTab, setActiveTab] = useState("signin")

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Welcome Coders
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="signin">Sign In</TabsTrigger>
                            <TabsTrigger value="signup">Sign Up</TabsTrigger>
                        </TabsList>

                        <TabsContent value="signin" className="space-y-6">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <Label htmlFor="signin-email">Email address</Label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <Input id="signin-email" name="email" type="email" autoComplete="email" required className="pl-10" placeholder="you@example.com" />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="signin-password">Password</Label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <Input id="signin-password" name="password" type="password" autoComplete="current-password" required className="pl-10" placeholder="••••••••" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <Button type="submit" className="w-full">
                                        Sign in
                                    </Button>
                                </div>
                            </form>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-3 gap-3">
                                    <div>
                                        <Button variant="outline" className="w-full">
                                            <Facebook className="h-5 w-5" />
                                            <span className="sr-only">Sign in with Facebook</span>
                                        </Button>
                                    </div>
                                    <div>
                                        <Button variant="outline" className="w-full">
                                            <Twitter className="h-5 w-5" />
                                            <span className="sr-only">Sign in with Twitter</span>
                                        </Button>
                                    </div>
                                    <div>
                                        <Button variant="outline" className="w-full">
                                            <Github className="h-5 w-5" />
                                            <span className="sr-only">Sign in with GitHub</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="signup" className="space-y-6">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <Label htmlFor="signup-name">Full Name</Label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <Input id="signup-name" name="name" type="text" autoComplete="name" required className="pl-10" placeholder="John Doe" />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="signup-email">Email address</Label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <Input id="signup-email" name="email" type="email" autoComplete="email" required className="pl-10" placeholder="you@example.com" />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="signup-password">Password</Label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <Input id="signup-password" name="password" type="password" autoComplete="new-password" required className="pl-10" placeholder="••••••••" />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <Input id="signup-confirm-password" name="confirm-password" type="password" autoComplete="new-password" required className="pl-10" placeholder="••••••••" />
                                    </div>
                                </div>

                                <div>
                                    <Button type="submit" className="w-full">
                                        Sign up
                                    </Button>
                                </div>
                            </form>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-3 gap-3">
                                    <div>
                                        <Button variant="outline" className="w-full">
                                            <Facebook className="h-5 w-5" />
                                            <span className="sr-only">Sign up with Facebook</span>
                                        </Button>
                                    </div>
                                    <div>
                                        <Button variant="outline" className="w-full">
                                            <Twitter className="h-5 w-5" />
                                            <span className="sr-only">Sign up with Twitter</span>
                                        </Button>
                                    </div>
                                    <div>
                                        <Button variant="outline" className="w-full">
                                            <Github className="h-5 w-5" />
                                            <span className="sr-only">Sign up with GitHub</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}