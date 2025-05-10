import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function FindDonorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Find Blood Donors</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search for Donors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
          <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">Find Blood</Button>
        </CardContent>
      </Card>

      <div className="rounded-lg border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">S.No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Photo</TableHead>
              <TableHead>Blood Group</TableHead>
              <TableHead>Amount Donated</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">John Doe {index + 1}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={`John Doe ${index + 1}`} />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{["A+", "B+", "O+", "AB+", "O-"][index % 5]}</TableCell>
                <TableCell>{(index + 1) * 500} ml</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
