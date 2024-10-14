import React from 'react';

function ProfileField({ label, value }) {
  return (
    <div className="mb-4">
      <p className="text-gray-500 text-sm mb-1">{label}</p>
      <p className="text-emerald-800">{value}</p>
    </div>
  );
}

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-emerald-800 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Profile</h1>
        </div>
        
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-3xl text-emerald-800">JD</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <ProfileField 
                label="First Name" 
                value="John" 
              />
              <ProfileField 
                label="Last Name" 
                value="Doe" 
              />
              <ProfileField 
                label="Email" 
                value="john.doe@example.com" 
              />
              <ProfileField 
                label="Phone" 
                value="+1 (555) 123-4567" 
              />
            </div>
            
            <div className="space-y-4">
              <ProfileField 
                label="Location" 
                value="New York City" 
              />
              <ProfileField 
                label="Country" 
                value="United States" 
              />
              <ProfileField 
                label="Gender" 
                value="Male" 
              />
              <ProfileField 
                label="Date of Birth" 
                value="January 1, 1990" 
              />
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-emerald-800 mb-4">Account Settings</h2>
            <div className="space-y-4">
              <button className="w-full bg-emerald-800 text-white rounded-md px-4 py-2 hover:bg-emerald-700 transition-colors">
                Change Password
              </button>
              <button className="w-full bg-white text-emerald-800 border border-emerald-800 rounded-md px-4 py-2 hover:bg-emerald-50 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}