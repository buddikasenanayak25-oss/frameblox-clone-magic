import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler } from "lucide-react";

const SizeGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Size Guide
            </h1>
            <p className="text-lg text-muted-foreground">
              Find your perfect fit with our comprehensive sizing charts
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Ruler className="h-6 w-6 text-primary" />
                <CardTitle>How to Measure</CardTitle>
              </div>
              <CardDescription>Follow these steps for accurate measurements</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping the tape horizontal</li>
                <li><strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose</li>
                <li><strong>Hips:</strong> Measure around the fullest part of your hips</li>
                <li><strong>Sleeve:</strong> Measure from the center back of your neck to your wrist with arm slightly bent</li>
              </ul>
            </CardContent>
          </Card>

          <Tabs defaultValue="tshirts" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="tshirts">T-Shirts</TabsTrigger>
              <TabsTrigger value="hoodies">Hoodies</TabsTrigger>
              <TabsTrigger value="jackets">Jackets</TabsTrigger>
            </TabsList>

            <TabsContent value="tshirts">
              <Card>
                <CardHeader>
                  <CardTitle>T-Shirt Sizing (inches)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Size</TableHead>
                        <TableHead>Chest</TableHead>
                        <TableHead>Length</TableHead>
                        <TableHead>Sleeve</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">XS</TableCell>
                        <TableCell>32-34"</TableCell>
                        <TableCell>27"</TableCell>
                        <TableCell>8"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">S</TableCell>
                        <TableCell>34-36"</TableCell>
                        <TableCell>28"</TableCell>
                        <TableCell>8.5"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">M</TableCell>
                        <TableCell>38-40"</TableCell>
                        <TableCell>29"</TableCell>
                        <TableCell>9"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">L</TableCell>
                        <TableCell>42-44"</TableCell>
                        <TableCell>30"</TableCell>
                        <TableCell>9.5"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">XL</TableCell>
                        <TableCell>46-48"</TableCell>
                        <TableCell>31"</TableCell>
                        <TableCell>10"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">XXL</TableCell>
                        <TableCell>50-52"</TableCell>
                        <TableCell>32"</TableCell>
                        <TableCell>10.5"</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hoodies">
              <Card>
                <CardHeader>
                  <CardTitle>Hoodie Sizing (inches)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Size</TableHead>
                        <TableHead>Chest</TableHead>
                        <TableHead>Length</TableHead>
                        <TableHead>Sleeve</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">XS</TableCell>
                        <TableCell>34-36"</TableCell>
                        <TableCell>26"</TableCell>
                        <TableCell>32"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">S</TableCell>
                        <TableCell>36-38"</TableCell>
                        <TableCell>27"</TableCell>
                        <TableCell>33"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">M</TableCell>
                        <TableCell>40-42"</TableCell>
                        <TableCell>28"</TableCell>
                        <TableCell>34"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">L</TableCell>
                        <TableCell>44-46"</TableCell>
                        <TableCell>29"</TableCell>
                        <TableCell>35"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">XL</TableCell>
                        <TableCell>48-50"</TableCell>
                        <TableCell>30"</TableCell>
                        <TableCell>36"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">XXL</TableCell>
                        <TableCell>52-54"</TableCell>
                        <TableCell>31"</TableCell>
                        <TableCell>37"</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="jackets">
              <Card>
                <CardHeader>
                  <CardTitle>Jacket Sizing (inches)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Size</TableHead>
                        <TableHead>Chest</TableHead>
                        <TableHead>Length</TableHead>
                        <TableHead>Sleeve</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">XS</TableCell>
                        <TableCell>36-38"</TableCell>
                        <TableCell>25"</TableCell>
                        <TableCell>33"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">S</TableCell>
                        <TableCell>38-40"</TableCell>
                        <TableCell>26"</TableCell>
                        <TableCell>34"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">M</TableCell>
                        <TableCell>42-44"</TableCell>
                        <TableCell>27"</TableCell>
                        <TableCell>35"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">L</TableCell>
                        <TableCell>46-48"</TableCell>
                        <TableCell>28"</TableCell>
                        <TableCell>36"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">XL</TableCell>
                        <TableCell>50-52"</TableCell>
                        <TableCell>29"</TableCell>
                        <TableCell>37"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">XXL</TableCell>
                        <TableCell>54-56"</TableCell>
                        <TableCell>30"</TableCell>
                        <TableCell>38"</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="bg-muted rounded-lg p-8 mt-8">
            <h3 className="text-xl font-bold mb-4 text-foreground">Fit Tips</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• If you're between sizes, we recommend sizing up for a more relaxed fit</li>
              <li>• Our hoodies have a slightly oversized fit for maximum comfort</li>
              <li>• T-shirts are true to size with a modern, comfortable fit</li>
              <li>• All measurements are approximate and may vary by ±0.5"</li>
              <li>• For any sizing questions, contact our support team</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SizeGuide;
