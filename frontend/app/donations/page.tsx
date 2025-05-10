import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search } from "lucide-react"

export default function DonationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Donations</h1>

      <div className="flex items-center mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input type="search" placeholder="Search donations..." className="pl-8" />
        </div>
      </div>

      <div className="rounded-lg border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">S.No</TableHead>
              <TableHead>Donor Name</TableHead>
              <TableHead>Photo</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Visit</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">Jane Smith {index + 1}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={`Jane Smith ${index + 1}`} />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{(index + 1) * 250} ml</TableCell>
                <TableCell>{new Date(2023, index % 12, (index + 1) * 2).toLocaleDateString()}</TableCell>
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
