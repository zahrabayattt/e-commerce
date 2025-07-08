// Import statements for ShadCN UI components.
// These paths assume the standard ShadCN project structure.

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

// The main profile page component, now using imported UI elements.
const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    // The main container, centered and styled for a clean look.
    <div
      className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 p-4 font-sans"
      dir="rtl"
    >
      <Card className="w-full max-w-lg bg-white dark:bg-gray-900">
        <CardHeader>
          <CardTitle>بروز رسانی پروفایل</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {/* Name Input Field */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-right">
                  نام
                </label>
                <Input id="name" placeholder="نام خود را وارد نمایید" />
              </div>
              {/* Email Input Field */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-right">
                  ایمیل
                </label>
                <Input id="email" type="email" placeholder="ایمیل خود را وارد نمایید" />
              </div>
              {/* Password Input Field */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="password" className="text-sm font-medium text-right">
                  رمز عبور
                </label>
                <Input id="password" type="password" placeholder="رمز عبور خود را وارد نمایید" />
              </div>
              {/* Confirm Password Input Field */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="confirm-password" className="text-sm font-medium text-right">
                  تکرار رمز عبور
                </label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="تکرار رمز عبور خود را وارد نمایید"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {/* Button component */}
          <Button variant="default" size="lg">
            بروزرسانی
          </Button>
          <Button variant="default" size="lg" onClick={() => navigate("/orders")}>
            سفارشات من
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProfilePage;
