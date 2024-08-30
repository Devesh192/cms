import React, { useState, useEffect } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Cake, Gift } from "lucide-react"
import Confetti from 'react-confetti'

export default function BirthdayCelebrator() {
    const [name, setName] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [isBirthday, setIsBirthday] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false)

    useEffect(() => {
        if (isBirthday) {
            setShowConfetti(true)
            const timer = setTimeout(() => setShowConfetti(false), 5000)
            return () => clearTimeout(timer)
        }
    }, [isBirthday])

    const checkBirthday = () => {
        const today = new Date()
        const birth = new Date(birthdate)
        setIsBirthday(
            today.getDate() === birth.getDate() &&
            today.getMonth() === birth.getMonth()
        )
    }

    return (
        <div className="container mx-auto px-4 py-32">
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="flex items-center justify-center text-2xl font-bold">
                        <Cake className="mr-2 h-6 w-6" />
                        Birthday Celebrator
                    </CardTitle>
                    <CardDescription>Enter your details to add this day as your birthday!</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={(e) => { e.preventDefault(); checkBirthday(); }}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="birthdate">Birthdate</Label>
                                <Input
                                    id="birthdate"
                                    type="date"
                                    value={birthdate}
                                    onChange={(e) => setBirthdate(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button onClick={checkBirthday}>Add Your Birth Day</Button>
                </CardFooter>
            </Card>

            {isBirthday && (
                <Card className="w-full max-w-md mx-auto mt-8 bg-primary text-primary-foreground">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-center text-2xl font-bold">
                            <Gift className="mr-2 h-6 w-6" />
                            Happy Birthday, {name}!
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center">
                            Wishing you a fantastic day filled with joy and celebration!
                        </p>
                    </CardContent>
                </Card>
            )}

            {showConfetti && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={200}
                />
            )}
        </div>
    )
}