import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Raleigh Office</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Greensboro Office</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Charlotte Office</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-lg font-semibold">(919) 219-0422</span>
              </div>
              <Button>Schedule Appointment</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Premier Roofing</div>
            <div className="flex space-x-6">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Services</Button>
              <Button variant="ghost">Insurance Claims</Button>
              <Button variant="ghost">Reviews</Button>
              <Button variant="ghost">Contact</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">
                The FASTEST-GROWING and HIGHEST-RATED Roofing Company in North Carolina
              </h1>
              <Button size="lg" className="text-lg">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Work With The Best Roofing Company In North Carolina
              </h2>
              <p className="text-gray-600 mb-6">
                We provide top-quality roofing services with a commitment to excellence and customer satisfaction. Our experienced team ensures your project is completed on time and within budget.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Residential Roofing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Expert solutions for homeowners
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Commercial Roofing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Comprehensive business solutions
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Roof Repairs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Fast and reliable fixes
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Emergency Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    24/7 emergency response
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl">Schedule Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  <div>
                    <Label htmlFor="service">Interested In</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Roofing</SelectItem>
                        <SelectItem value="commercial">Commercial Roofing</SelectItem>
                        <SelectItem value="repair">Roof Repair</SelectItem>
                        <SelectItem value="emergency">Emergency Service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project" />
                  </div>
                  <Button className="w-full">Submit</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
