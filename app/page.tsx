import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Raghul K</div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary">
            <Image src="/placeholder.svg?height=128&width=128" alt="Raghul K" fill className="object-cover" priority />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">Raghul K</h1>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
            React Developer | Front-end Developer | Fintech | Healthcare
          </h2>
          <p className="max-w-[700px] text-muted-foreground mb-8">
            Highly skilled and driven front-end developer with 3+ years of experience building responsive web
            applications using ReactJS and modern JavaScript tools/frameworks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 scroll-mt-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground mb-4">
                  I'm a passionate front-end developer with expertise in building responsive and user-friendly web
                  applications. With over 3 years of experience in the industry, I've worked on various projects in the
                  fintech and healthcare sectors.
                </p>
                <p className="text-muted-foreground mb-4">
                  My journey in software development began during my Bachelor's in Computer Science, and I've since
                  honed my skills in React, JavaScript, and modern web technologies. I have a proven ability to learn
                  new technologies quickly and work with global teams to solve complex business needs.
                </p>
                <p className="text-muted-foreground">
                  Notable achievements include migrating applications from ASP.Net to React, increasing user experience
                  and speed by 20%, and implementing banking solutions that resulted in a 50% increase in customer base.
                </p>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Professional Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Experience</span>
                        <span className="text-sm text-muted-foreground">3+ years</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Specialization</span>
                        <span className="text-sm text-muted-foreground">React, Front-end Development</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Industries</span>
                        <span className="text-sm text-muted-foreground">Fintech, Healthcare</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Education</span>
                        <span className="text-sm text-muted-foreground">B.E. in Computer Science</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 scroll-mt-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Frameworks & Libraries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">ReactJS</span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Redux</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Webpack</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">JavaScript</span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">TypeScript</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">HTML & CSS</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">SQL</span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tools & Technologies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Git</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Jenkins</span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">DevExpress</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Visual Studio</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {[
                "ReactJS",
                "Redux",
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "jQuery",
                "SQL",
                "Oracle",
                "Microsoft SQL",
                "Git",
                "Jenkins",
                "DevExpress",
                "Veracode",
                "SonarQube",
                "Visual Studio",
                "Webpack",
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24 scroll-mt-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Work Experience</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>Software Engineer</CardTitle>
                      <CardDescription>I-exceed, Bangalore</CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      May 2023 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>
                      Worked for Central Bank of India to develop applications using Appzillon Platform, a single
                      platform capable of rendering applications for web, IOS, and Android (APK).
                    </li>
                    <li>
                      Contributed in migrating bank's existing application to updated version using Appzillon platform.
                    </li>
                    <li>
                      Implemented banking solutions such as Retail, Onboarding and Admin applications which resulted in
                      50% increase in Bank's customer base.
                    </li>
                    <li>
                      Developed 2 Factor Authentication and Personal Finance Management (PFM) modules, enhancing
                      security and providing users with detailed financial insights.
                    </li>
                    <li>Collaborated with cross-functional teams, onsite team to ensure project success.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>Associate Software Engineer</CardTitle>
                      <CardDescription>Clinisys, Bangalore</CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      July 2021 - Feb 2023
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>
                      Migrated applications from ASP.Net to React, increasing user experience and speed by 20% in LIMS
                      applications.
                    </li>
                    <li>
                      Implementing responsive design using media queries to be compatible in all web, IOS, and Android
                      (APK).
                    </li>
                    <li>
                      Developed and maintained user interface components for sample collection modules for seamless
                      integration with hospital labs.
                    </li>
                    <li>
                      Handled CR fixes for existing production applications and provided necessary support to vendors.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>Internship</CardTitle>
                      <CardDescription>Clinisys, Bangalore</CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      Jan 2021 - June 2021
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Fixed functional issues reported by the testing team, improving delivery efficiency by 20%.</li>
                    <li>
                      Gained experience in all phases of the SDLC process, including requirement analysis and
                      implementation.
                    </li>
                    <li>Learned tools such as GIT, debugging tools, and build automation processes.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 scroll-mt-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Projects</h2>

            <Tabs defaultValue="professional" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="professional">Professional Projects</TabsTrigger>
                <TabsTrigger value="personal">Personal Projects</TabsTrigger>
              </TabsList>

              <TabsContent value="professional" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Healthcare Project</CardTitle>
                    <CardDescription>Migration from ASP.Net to React</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Migration of existing applications from ASP.Net to React which is compatible in all platforms.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">ReactJS</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">HTML</Badge>
                      <Badge variant="secondary">CSS</Badge>
                      <Badge variant="secondary">DevExpress</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">API Integration</Badge>
                      <Badge variant="secondary">jQuery</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>
                          View Demo
                        </Button>
                        <Button variant="outline" size="sm" disabled>
                          Source Code
                        </Button>
                      </div>
                      <Badge>Clinisys</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Banking Project</CardTitle>
                    <CardDescription>Central Bank of India</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Developed applications for retail banking, onboarding, and wealth management for the Central Bank
                      of India. Developed 2 Factor Authentication and Personal Finance Management (PFM) modules.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">ReactJS</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">jQuery</Badge>
                      <Badge variant="secondary">HTML</Badge>
                      <Badge variant="secondary">CSS</Badge>
                      <Badge variant="secondary">Jenkins</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>
                          View Demo
                        </Button>
                        <Button variant="outline" size="sm" disabled>
                          Source Code
                        </Button>
                      </div>
                      <Badge>I-exceed</Badge>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="personal" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Disney+ Hotstar Clone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Built a clone using ReactJS and API integration.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">ReactJS</Badge>
                      <Badge variant="secondary">API Integration</Badge>
                      <Badge variant="secondary">CSS</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" disabled>
                        View Demo
                      </Button>
                      <Button variant="outline" size="sm" disabled>
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Movie Search</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Developed a movie search application using ReactJS and external APIs.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">ReactJS</Badge>
                      <Badge variant="secondary">API Integration</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" disabled>
                        View Demo
                      </Button>
                      <Button variant="outline" size="sm" disabled>
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>E-Commerce Website</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Created a full-stack e-commerce website using ReactJS.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">ReactJS</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">CSS</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" disabled>
                        View Demo
                      </Button>
                      <Button variant="outline" size="sm" disabled>
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Weather App</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Designed a weather forecasting application using ReactJS and API integration.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">ReactJS</Badge>
                      <Badge variant="secondary">API Integration</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" disabled>
                        View Demo
                      </Button>
                      <Button variant="outline" size="sm" disabled>
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="py-12 md:py-24 scroll-mt-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Education & Certifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">
                        Bachelor of Engineering in Computer Science and Engineering
                      </h3>
                      <p className="text-muted-foreground">
                        Sri Krishna College of Technology, Coimbatore - Tamil Nadu
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <Badge variant="outline">2017-2021</Badge>
                        <span className="text-sm font-medium">CGPA: 8.88</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">React - The Complete Guide 2024</h3>
                      <p className="text-muted-foreground">Udemy</p>
                      <p className="text-sm mt-1">
                        Learned the React JS concepts, Redux architecture and Next Js Server rendering.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">GIT</h3>
                      <p className="text-muted-foreground">Udemy</p>
                      <p className="text-sm mt-1">Learned the usage of Git methodologies and uses.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">Structured Query Language</h3>
                      <p className="text-muted-foreground">Udemy</p>
                      <p className="text-sm mt-1">
                        Learned about SQL database concepts which helped in query creation, DB creation and maintaining
                        a large scale DB.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 scroll-mt-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Contact Me</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>Feel free to reach out to me for any opportunities or inquiries.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <span>+91 7904224390</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <span>raghulrk2000@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-muted-foreground" />
                      <Link href="https://linkedin.com" className="hover:underline">
                        LinkedIn Profile
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-muted-foreground" />
                      <Link href="https://github.com" className="hover:underline">
                        GitHub Profile
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full p-2 rounded-md border border-input bg-background"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-2 rounded-md border border-input bg-background"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className="w-full p-2 rounded-md border border-input bg-background"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full p-2 rounded-md border border-input bg-background min-h-[120px]"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container py-8 md:py-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl">Raghul K</h3>
            <p className="text-sm text-muted-foreground">React Developer | Front-end Developer</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:raghulrk2000@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="tel:+917904224390" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="container border-t py-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Raghul K. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

