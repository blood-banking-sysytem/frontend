import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone } from "lucide-react"

export default function BloodBankPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Blood Bank Locator</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Find Blood Banks Near You</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select>
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="state1">State 1</SelectItem>
                  <SelectItem value="state2">State 2</SelectItem>
                  <SelectItem value="state3">State 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Select>
                <SelectTrigger id="city">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city1">City 1</SelectItem>
                  <SelectItem value="city2">City 2</SelectItem>
                  <SelectItem value="city3">City 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="place">Place</Label>
              <Select>
                <SelectTrigger id="place">
                  <SelectValue placeholder="Select Place" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="place1">Place 1</SelectItem>
                  <SelectItem value="place2">Place 2</SelectItem>
                  <SelectItem value="place3">Place 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">Search</Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">City Blood Bank {index + 1}</h3>
              <div className="flex items-start space-x-2 text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <p className="text-sm">123 Main Street, City {index + 1}, State</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 mb-4">
                <Phone className="h-4 w-4 shrink-0" />
                <p className="text-sm">+1 (234) 567-89{index}0</p>
              </div>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
