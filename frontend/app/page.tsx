import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Droplet, MapPin, Search } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">DONATE BLOOD TODAY!</h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">Join Us in Saving Lives</p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-white/90">
                <Link href="/register">
                  Register / Donate Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Us</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
              Blood donation is a simple, yet profound act of kindness that can save lives. At Blood Connect, we bridge
              the gap between donors and those in need, making the process seamless and accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="p-3 bg-red-100 rounded-full">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Blood Bank Locator</h3>
              <p className="text-center text-gray-600">
                Find the nearest blood banks in your area with our easy-to-use locator tool.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/blood-bank">Find Blood Banks</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="p-3 bg-red-100 rounded-full">
                <Search className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Find Donor</h3>
              <p className="text-center text-gray-600">
                Search for blood donors based on blood group and location to find a match quickly.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/find-donor">Find Donors</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="p-3 bg-red-100 rounded-full">
                <Droplet className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Request Blood</h3>
              <p className="text-center text-gray-600">
                Submit a request for blood donation for patients in need of urgent transfusions.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/request-blood">Request Blood</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-red-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Save Lives?</h2>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-lg">
              Your donation can make a difference. Join our community of donors today.
            </p>
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-white/90">
              <Link href="/register">Become a Donor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
