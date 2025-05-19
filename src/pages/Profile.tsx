// ProfilePage.tsx
import React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


function ProfilePage() {
  const [user, setUser] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    rank: "Senior Teacher",
    password: "********",
  });


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here (API call etc.)
    alert("Profile updated!");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold">Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input value={user.fullName} disabled />
            </div>
            <div>
              <Label>Email</Label>
              <Input name="email" value={user.email} onChange={handleChange} />
            </div>
            <div>
              <Label>Rank</Label>
              <Input name="rank" value={user.rank} onChange={handleChange} />
            </div>
            <div>
              <Label>Password</Label>
              <Input
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full">
              Update Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default ProfilePage;

