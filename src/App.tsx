import React from 'react';
import { Layout } from './components/Layout';
import { AppView } from './types';
import { DashboardView } from './components/views/DashboardView';
import { InterviewView } from './components/views/InterviewView';
import { FocusView } from './components/views/FocusView';
import { RoadmapView } from './components/views/RoadmapView';
import { InfrastructureView } from './components/views/InfrastructureView';
import { DevModeView } from './components/views/DevModeView';
import { InitProfileView } from './components/views/InitProfileView';
import { PredictiveView } from './components/views/PredictiveView';
import { MockTestView } from './components/views/MockTestView';
import { AnalyticsView } from './components/views/AnalyticsView';

export default function App() {
  const [currentView, setCurrentView] = React.useState<AppView>(AppView.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD: return <DashboardView />;
      case AppView.INTERVIEW: return <InterviewView />;
      case AppView.FOCUS: return <FocusView />;
      case AppView.ROADMAP: return <RoadmapView />;
      case AppView.INIT_PROFILE: return <InitProfileView />;
      case AppView.MOCK_TEST: return <MockTestView />;
      case AppView.ANALYTICS: return <AnalyticsView />;
      case AppView.DEV_MODE: return <DevModeView />;
      case AppView.INFRASTRUCTURE: return <InfrastructureView />;
      case AppView.PREDICTIVE: return <PredictiveView />;
      default: return <DashboardView />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {renderView()}
    </Layout>
  );
}

