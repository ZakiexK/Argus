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
    },
    {
      title: 'Bearer Tokens',
      description: 'Understand token-based authentication and common security issues.',
      challenges: 6,
      points: 2000,
      difficulty: 'Intermediate',
      status: 'coming-soon',
      href: '#',
    },
    {
      title: 'JWT (JSON Web Tokens)',
      description: 'Deep dive into JWT structure, algorithms, and exploitation techniques.',
      challenges: 8,
      points: 3000,
      difficulty: 'Advanced',
      status: 'coming-soon',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            Interactive Cybersecurity Learning
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-4">
            Argus Authentication Platform
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Master authentication security through hands-on learning and CTF challenges.
            Understand vulnerabilities, learn exploitation techniques, and build secure systems.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {modules.map((module) => (
            <Card
              key={module.title}
              className={`bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all ${module.status === 'available' ? 'hover:shadow-lg hover:shadow-blue-500/20' : 'opacity-75'
                }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-white">{module.title}</CardTitle>
                  {module.status === 'coming-soon' && (
                    <Badge variant="secondary">Coming Soon</Badge>
                  )}
                  {module.status === 'available' && (
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                      Available
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-slate-400">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-slate-400 mb-4">
                  <span>{module.challenges} Challenges</span>
                  <span>{module.points} Points</span>
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="text-slate-300">
                    {module.difficulty}
                  </Badge>
                  {module.status === 'available' ? (
                    <Link
                      href={module.href}
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Start Learning →
                    </Link>
                  ) : (
                    <span className="text-slate-500">Locked</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-lg font-semibold text-white mb-2">Interactive Learning</h3>
            <p className="text-slate-400 text-sm">
              Real-time demos and visualizations to understand auth mechanisms
            </p>
          </div>
          <div>
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-white mb-2">CTF Challenges</h3>
            <p className="text-slate-400 text-sm">
              Capture the flag challenges to test your skills
            </p>
          </div>
          <div>
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="text-lg font-semibold text-white mb-2">Safe Environment</h3>
            <p className="text-slate-400 text-sm">
              Intentionally vulnerable sandbox for ethical hacking practice
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
