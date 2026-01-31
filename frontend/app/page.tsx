import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0">
            Interactive Cybersecurity Learning
          </Badge>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Argus Authentication Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Master authentication security through hands-on learning and CTF challenges.
            Understand vulnerabilities, learn exploitation techniques, and build secure systems.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {modules.map((module) => (
            <Card
              key={module.title}
              className={`bg-white border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-2xl ${module.status === 'available' ? 'hover:-translate-y-1' : 'opacity-75'
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
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Learning</h3>
            <p className="text-gray-600 leading-relaxed">
              Real-time demos and visualizations to understand auth mechanisms
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
        </div>
      </div>
    </div>
  );
}
