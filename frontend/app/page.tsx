'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const modules = [
    {
      title: 'Basic Authentication',
      description: 'Learn how Basic Auth works, its vulnerabilities, and how to exploit them.',
      challenges: 5,
      points: 1500,
      difficulty: 'Beginner',
      status: 'available',
      href: '/basic-auth',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Bearer Tokens',
      description: 'Understand token-based authentication and common security issues.',
      challenges: 6,
      points: 2000,
      difficulty: 'Intermediate',
      status: 'coming-soon',
      href: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'JWT (JSON Web Tokens)',
      description: 'Deep dive into JWT structure, algorithms, and exploitation techniques.',
      challenges: 8,
      points: 3000,
      difficulty: 'Advanced',
      status: 'coming-soon',
      href: '#',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const sessionSteps = [
    { id: 1, label: 'Client Request', description: 'User attempts to access resource', color: 'from-blue-500 to-cyan-500' },
    { id: 2, label: 'Server Validation', description: 'Server checks credentials', color: 'from-purple-500 to-pink-500' },
    { id: 3, label: 'Session Created', description: 'Server creates session', color: 'from-green-500 to-emerald-500' },
    { id: 4, label: 'Access Granted', description: 'User can access resources', color: 'from-orange-500 to-red-500' },
  ];

  const authTypes = [
    {
      name: 'Session-Based',
      description: 'Server stores session data, client gets session ID',
      icon: '🔐',
      pros: ['Server control', 'Easy to revoke', 'Stateful'],
      cons: ['Scalability issues', 'Server memory'],
    },
    {
      name: 'Token-Based',
      description: 'Client stores token, server validates signature',
      icon: '🎫',
      pros: ['Stateless', 'Scalable', 'Cross-domain'],
      cons: ['Hard to revoke', 'Token size'],
    },
    {
      name: 'API Keys',
      description: 'Simple key-based authentication for APIs',
      icon: '🔑',
      pros: ['Simple', 'Fast', 'Easy to implement'],
      cons: ['Less secure', 'No expiration', 'Hard to rotate'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0">
            Interactive Cybersecurity Learning
          </Badge>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Argus Authentication Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Master authentication security through hands-on learning, animated visualizations, and CTF challenges
          </p>
        </motion.div>

        {/* What are Sessions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
            Understanding Authentication Sessions
          </h2>
          <Card className="bg-white border-2 border-gray-200 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">What is a Session?</CardTitle>
              <CardDescription className="text-gray-600 text-base">
                A session is a way to maintain state and identity across multiple requests in stateless HTTP protocol
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Animation */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-6 text-center text-lg">Session Flow Animation</h3>
                  <div className="space-y-4">
                    {sessionSteps.map((step, index) => (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0.3, scale: 0.95 }}
                        animate={{
                          opacity: activeStep === index ? 1 : 0.3,
                          scale: activeStep === index ? 1 : 0.95,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`p-4 rounded-lg bg-gradient-to-r ${step.color} ${activeStep === index ? 'shadow-lg' : ''
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-2xl bg-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                            {step.id}
                          </div>
                          <div className="text-white">
                            <p className="font-bold">{step.label}</p>
                            <p className="text-sm opacity-90">{step.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Explanation */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-xl">
                    <h4 className="font-bold mb-2 text-lg">Why Sessions?</h4>
                    <p className="text-sm leading-relaxed">
                      HTTP is stateless - each request is independent. Sessions allow the server to remember who you are
                      across multiple requests, maintaining your logged-in state and preferences.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                      <p className="font-semibold text-green-700">✓ Maintains user state</p>
                      <p className="text-sm text-gray-600">Remember login, cart, preferences</p>
                    </div>
                    <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                      <p className="font-semibold text-green-700">✓ Secure authentication</p>
                      <p className="text-sm text-gray-600">Verify identity on each request</p>
                    </div>
                    <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                      <p className="font-semibold text-green-700">✓ Resource protection</p>
                      <p className="text-sm text-gray-600">Control access to sensitive data</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Types of Authentication */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
            Types of Authentication
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {authTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="bg-white border-2 border-gray-200 hover:shadow-xl transition-all h-full">
                  <CardHeader>
                    <div className="text-5xl mb-3">{type.icon}</div>
                    <CardTitle className="text-xl text-gray-900">{type.name}</CardTitle>
                    <CardDescription className="text-gray-600">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-green-700 mb-2">Pros:</p>
                        <ul className="space-y-1">
                          {type.pros.map((pro) => (
                            <li key={pro} className="text-sm text-gray-600 flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-red-700 mb-2">Cons:</p>
                        <ul className="space-y-1">
                          {type.cons.map((con) => (
                            <li key={con} className="text-sm text-gray-600 flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
            Interactive Learning Modules
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className={`bg-white border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-2xl ${module.status === 'available' ? '' : 'opacity-75'
                    }`}
                >
                  <CardHeader>
                    <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${module.gradient} mb-4`} />
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-gray-900 text-xl">{module.title}</CardTitle>
                      {module.status === 'coming-soon' && (
                        <Badge variant="outline" className="border-gray-300 text-gray-600">
                          Coming Soon
                        </Badge>
                      )}
                      {module.status === 'available' && (
                        <Badge className="bg-green-100 text-green-700 border-green-200 hover:bg-green-100">
                          Available
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span className="font-medium">{module.challenges} Challenges</span>
                      <span className="font-medium">{module.points} Points</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="border-gray-300 text-gray-700">
                        {module.difficulty}
                      </Badge>
                      {module.status === 'available' ? (
                        <Link
                          href={module.href}
                          className={`font-semibold bg-gradient-to-r ${module.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                        >
                          Start Learning →
                        </Link>
                      ) : (
                        <span className="text-gray-400 font-medium">Locked 🔒</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-xl p-8 text-center shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🎬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Animated Learning</h3>
            <p className="text-gray-600 leading-relaxed">
              Watch code execute line-by-line with visual animations
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">CTF Challenges</h3>
            <p className="text-gray-600 leading-relaxed">
              Capture the flag challenges to test your skills
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Environment</h3>
            <p className="text-gray-600 leading-relaxed">
              Intentionally vulnerable sandbox for ethical hacking practice
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
