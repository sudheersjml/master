import React from 'react';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity, 
  Bell, 
  Settings, 
  LogOut,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  FileText,
  MessageSquare,
  Shield
} from 'lucide-react';

interface DashboardProps {
  user: {
    id: string;
    email: string;
    name?: string;
  };
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      title: 'Active Users',
      value: '2,350',
      change: '+180.1%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Sales',
      value: '+12,234',
      change: '+19%',
      trend: 'up',
      icon: BarChart3,
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '-4.3%',
      trend: 'down',
      icon: TrendingUp,
      color: 'text-orange-600 dark:text-orange-400'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'sale',
      title: 'New sale completed',
      description: 'Order #1234 - $299.00',
      time: '2 minutes ago',
      icon: DollarSign,
      color: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
    },
    {
      id: 2,
      type: 'user',
      title: 'New user registered',
      description: 'john.doe@example.com',
      time: '5 minutes ago',
      icon: Users,
      color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
    },
    {
      id: 3,
      type: 'message',
      title: 'New message received',
      description: 'Support ticket #5678',
      time: '10 minutes ago',
      icon: MessageSquare,
      color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    },
    {
      id: 4,
      type: 'report',
      title: 'Monthly report generated',
      description: 'Analytics report for November',
      time: '1 hour ago',
      icon: FileText,
      color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
    }
  ];

  const quickActions = [
    {
      title: 'Create New Project',
      description: 'Start a new project',
      icon: Plus,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'View Analytics',
      description: 'Check performance metrics',
      icon: BarChart3,
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Schedule Meeting',
      description: 'Book a new meeting',
      icon: Calendar,
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Prantek
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Welcome back, {user.name || user.email.split('@')[0]}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color.includes('green') ? 'bg-green-100 dark:bg-green-900/20' : 
                  stat.color.includes('blue') ? 'bg-blue-100 dark:bg-blue-900/20' :
                  stat.color.includes('purple') ? 'bg-purple-100 dark:bg-purple-900/20' :
                  'bg-orange-100 dark:bg-orange-900/20'}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="flex items-center mt-4">
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                  from last month
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Recent Activity
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Latest updates from your account
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${activity.color}`}>
                        <activity.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {activity.title}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {activity.description}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Quick Actions
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Common tasks and shortcuts
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className={`w-full ${action.color} text-white p-4 rounded-lg text-left transition-all duration-200 hover:shadow-md`}
                    >
                      <div className="flex items-center space-x-3">
                        <action.icon className="w-5 h-5" />
                        <div>
                          <p className="font-medium">{action.title}</p>
                          <p className="text-sm opacity-90">{action.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* User Profile Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-semibold">
                      {(user.name || user.email)[0].toUpperCase()}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {user.name || 'User'}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {user.email}
                  </p>
                  <button className="mt-4 w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;