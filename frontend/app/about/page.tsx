import { Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6">
          <Heart className="h-10 w-10 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold mb-6">About Blood Connect</h1>
        <p className="text-lg text-gray-600 mb-8">
          Blood Connect is a modern platform dedicated to bridging the gap between blood donors and recipients. Our
          mission is to ensure that no life is lost due to blood shortage by creating a seamless, accessible system for
          blood donation and requests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To create a world where everyone has timely access to safe blood and blood products.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-600">A global network of voluntary blood donors ensuring blood security for all.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Our Values</h3>
            <p className="text-gray-600">Compassion, integrity, accessibility, and excellence in service.</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Register</h3>
              <p className="text-center text-gray-600">Create an account as a donor or recipient</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Connect</h3>
              <p className="text-center text-gray-600">Find donors or request blood based on your needs</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Save Lives</h3>
              <p className="text-center text-gray-600">Donate blood or receive the blood you need</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
