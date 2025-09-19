import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Bot, 
  PieChart, 
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  Zap
} from "lucide-react";
import Header from "@/components/header";

const FinanceAILanding = () => {
  const features = [
    {
      icon: Bot,
      title: "Cognitive Financial Intelligence",
      description: "Advanced machine learning algorithms deliver predictive analytics and autonomous financial decision-making capabilities"
    },
    {
      icon: PieChart,
      title: "Enterprise-Grade Analytics",
      description: "Real-time data processing with multi-dimensional analysis for strategic financial optimization and risk assessment"
    },
    {
      icon: TrendingUp,
      title: "Predictive Market Intelligence",
      description: "Leverage deep learning models for market trend forecasting and intelligent portfolio rebalancing"
    },
    {
      icon: Target,
      title: "Automated Compliance & Governance",
      description: "AI-driven regulatory compliance monitoring with automated risk mitigation and audit trail generation"
    }
  ];

  const stats = [
    { number: "$2.4B", suffix: "+", label: "Assets Under Management" },
    { number: "99.97", suffix: "%", label: "System Uptime SLA" },
    { number: "500", suffix: "+", label: "Enterprise Clients" }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Advanced AI-driven financial intelligence for growing businesses",
      features: [
        "Cognitive Analytics Engine",
        "Real-time Risk Assessment",
        "Automated Compliance Monitoring",
        "Multi-Currency Processing",
        "Advanced Reporting Suite",
        "24/7 Technical Support"
      ],
      highlighted: false
    },
    {
      name: "Enterprise", 
      price: "$999",
      period: "/month",
      description: "Complete financial intelligence platform for large organizations",
      features: [
        "Unlimited Data Processing",
        "Custom ML Model Training",
        "White-label Solutions",
        "Dedicated Account Manager",
        "SLA Guarantees",
        "Advanced Security Controls"
      ],
      highlighted: true
    },
    {
      name: "Enterprise Plus",
      price: "Custom",
      period: "",
      description: "Bespoke AI financial solutions with dedicated infrastructure",
      features: [
        "Private Cloud Deployment",
        "Custom Algorithm Development",
        "Regulatory Compliance Suite",
        "Multi-tenant Architecture",
        "Executive Dashboard",
        "Strategic Consulting Services"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Next-Generation Financial Intelligence Platform
              </span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight mb-6">
              AI Financial
              <br />
              <span className="text-5xl md:text-6xl">Intelligence</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Enterprise-grade cognitive financial platform leveraging advanced machine learning, 
              predictive analytics, and autonomous decision-making to revolutionize institutional finance management.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
                  Request Enterprise Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-medium rounded-full">
                Schedule Consultation
              </Button>
            </div>

            {/* Hero Image/Dashboard Preview */}
            <div className="relative mx-auto max-w-5xl">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Executive Intelligence Suite</h3>
                    <p className="text-gray-600">Real-time financial intelligence at your fingertips</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm py-12">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-500 mb-8 font-medium">Trusted by Fortune 500 companies and leading financial institutions</p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="font-bold text-xl text-gray-700">Goldman Sachs</div>
              <div className="font-bold text-xl text-gray-700">JPMorgan Chase</div>
              <div className="font-bold text-xl text-gray-700">BlackRock</div>
              <div className="font-bold text-xl text-gray-700">Vanguard</div>
              <div className="font-bold text-xl text-gray-700">Morgan Stanley</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <Bot className="w-4 h-4 mr-2" />
              Enterprise AI Capabilities
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Revolutionary Financial Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your organization with next-generation cognitive computing and autonomous financial operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Enterprise Performance
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Leading financial institutions trust our platform to manage critical operations and drive strategic growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}<span className="text-blue-200">{stat.suffix}</span>
                </div>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              <Zap className="w-4 h-4 mr-2" />
              How It Works
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Enterprise Implementation Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless integration with existing enterprise systems, APIs, and data warehouses for comprehensive financial data aggregation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced machine learning algorithms process complex financial data to generate predictive insights and risk assessments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                Deliver actionable intelligence through executive dashboards, automated reporting, and strategic recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              <DollarSign className="w-4 h-4 mr-2" />
              Pricing Plans
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Enterprise Investment Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scalable solutions designed for institutional requirements. Custom pricing available for large deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-lg ${
                  plan.highlighted 
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-white relative' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Revolutionize Your Financial Operations?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Join leading financial institutions leveraging our enterprise-grade AI platform for strategic advantage and operational excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
                Request Enterprise Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-medium rounded-full">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                AI Financial Intelligence
              </h3>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Transforming enterprise financial operations through advanced artificial intelligence, machine learning, and cognitive computing solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/api" className="hover:text-white transition-colors">API</Link></li>
                <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AI Financial Intelligence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinanceAILanding;
