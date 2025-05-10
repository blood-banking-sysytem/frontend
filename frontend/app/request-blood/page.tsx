import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RequestBloodPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Request Blood</h1>

        <Card>
          <CardHeader>
            <CardTitle>Blood Request Form</CardTitle>
            <CardDescription>Fill out the form below to submit a blood request for a patient in need.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="patientName">Patient Name</Label>
              <Input id="patientName" placeholder="Enter patient's full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="doctorName">Doctor Name</Label>
              <Input id="doctorName" placeholder="Enter doctor's full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bloodGroup">Blood Group</Label>
              <Select>
                <SelectTrigger id="bloodGroup">
                  <SelectValue placeholder="Select Blood Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a+">A+</SelectItem>
                  <SelectItem value="a-">A-</SelectItem>
                  <SelectItem value="b+">B+</SelectItem>
                  <SelectItem value="b-">B-</SelectItem>
                  <SelectItem value="ab+">AB+</SelectItem>
                  <SelectItem value="ab-">AB-</SelectItem>
                  <SelectItem value="o+">O+</SelectItem>
                  <SelectItem value="o-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <Label htmlFor="district">District</Label>
                <Select>
                  <SelectTrigger id="district">
                    <SelectValue placeholder="Select District" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="district1">District 1</SelectItem>
                    <SelectItem value="district2">District 2</SelectItem>
                    <SelectItem value="district3">District 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="division">Division</Label>
                <Select>
                  <SelectTrigger id="division">
                    <SelectValue placeholder="Select Division" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="division1">Division 1</SelectItem>
                    <SelectItem value="division2">Division 2</SelectItem>
                    <SelectItem value="division3">Division 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="hospital">Hospital Name</Label>
              <Input id="hospital" placeholder="Enter hospital name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input id="contactNumber" type="tel" placeholder="Enter contact number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="requiredUnits">Required Units</Label>
              <Input id="requiredUnits" type="number" min="1" placeholder="Number of units required" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-red-600 hover:bg-red-700">Submit Request</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
