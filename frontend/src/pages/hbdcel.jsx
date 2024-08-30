'use client'

import { useState, useEffect } from 'react'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog"
import { Cake, Gift, Calendar, Plus } from 'lucide-react'
import Confetti from 'react-confetti'
import Hbd from './hbd'

// Mock API function to simulate fetching birthday data
const fetchTodaysBirthdays = async () => {
    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Mock data
    return [
        { id: 1, name: "John Doe", age: 30 },
        { id: 2, name: "Jane Smith", age: 25 },
        { id: 3, name: "Bob Johnson", age: 45 },
    ]
}

export default function Component() {
    const [birthdays, setBirthdays] = useState([])
    const [loading, setLoading] = useState(true)
    const [showConfetti, setShowConfetti] = useState(false)
    const [newBirthday, setNewBirthday] = useState({ name: '', age: '' })
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    useEffect(() => {
        const loadBirthdays = async () => {
            try {
                const data = await fetchTodaysBirthdays()
                setBirthdays(data)
                setLoading(false)
                if (data.length > 0) {
                    setShowConfetti(true)
                    // Stop the celebration after 3 seconds
                    setTimeout(() => setShowConfetti(false), 3000)
                }
            } catch (error) {
                console.error("Failed to fetch birthdays:", error)
                setLoading(false)
            }
        }

        loadBirthdays()
    }, [])

    const handleAddBirthday = () => {
        if (newBirthday.name && newBirthday.age) {
            const newPerson = {
                id: birthdays.length + 1,
                name: newBirthday.name,
                age: parseInt(newBirthday.age)
            }
            setBirthdays([...birthdays, newPerson])
            setNewBirthday({ name: '', age: '' })
            setIsAddModalOpen(false)
            setShowConfetti(true)
            // Stop the celebration after 3 seconds
            setTimeout(() => setShowConfetti(false), 3000)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white flex flex-col items-center justify-center p-4 relative pt-28">
            {showConfetti && <Confetti />}

            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                <DialogTrigger asChild>
                    <Button className="absolute top-32 right-4" variant="outline">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Birthday
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add New Birthday</DialogTitle>
                    </DialogHeader>
                    {/* <div className="space-y-4 mt-4">
                        <Input
                            placeholder="Name"
                            value={newBirthday.name}
                            onChange={(e) => setNewBirthday({ ...newBirthday, name: e.target.value })}
                        />
                        <Input
                            type="number"
                            placeholder="Age"
                            value={newBirthday.age}
                            onChange={(e) => setNewBirthday({ ...newBirthday, age: e.target.value })}
                        />
                        <Button onClick={handleAddBirthday}>Add Birthday</Button>
                    </div> */}

                    <Hbd/>
                </DialogContent>
            </Dialog>

            <Card className="w-full max-w-md mt-4">
                <CardContent className="space-y-6 p-6">
                    <div className="flex justify-center">
                        <Cake className="h-16 w-16 text-pink-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-center text-gray-800">Today's Birthday Celebrations</h1>
                    {loading ? (
                        <div className="text-center text-gray-600">Loading today's birthdays...</div>
                    ) : birthdays.length > 0 ? (
                        <div className="space-y-4">
                            {birthdays.map((person) => (
                                <Card key={person.id} className="bg-pink-50">
                                    <CardContent className="p-4 flex items-center justify-between">
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800">{person.name}</h2>
                                            <p className="text-gray-600">Turning {person.age} today!</p>
                                        </div>
                                        <Button onClick={() => alert(`Sending birthday wishes to ${person.name}!`)}>
                                            <Gift className="mr-2 h-4 w-4" />
                                            Send Wishes
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                            <div className="flex justify-center">
                                <Button onClick={() => {
                                    setShowConfetti(true);
                                    setTimeout(() => setShowConfetti(false), 3000);
                                }}>
                                    <Gift className="mr-2 h-4 w-4" />
                                    Celebrate All
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-600">
                            <Calendar className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                            <p>No birthdays today. Check back tomorrow!</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}