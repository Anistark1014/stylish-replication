import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import MatesWithBenefits from "./pages/MatesWithBenefits";
import Organization from "./pages/Organization";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes - unauthenticated users can access feed and notes */}
            <Route path="/" element={<Index />} />
            <Route path="/notes" element={<Layout showMessagesSidebar={false}><Notes /></Layout>} />
            
            {/* Auth route */}
            <Route path="/auth" element={<Auth />} />
            
            {/* Protected routes - require authentication */}
            <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
            <Route path="/mates-with-benefits" element={<ProtectedRoute><MatesWithBenefits /></ProtectedRoute>} />
            <Route path="/organization" element={<ProtectedRoute><Layout showMessagesSidebar={false}><Organization /></Layout></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Layout showMessagesSidebar={false}><Profile /></Layout></ProtectedRoute>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
