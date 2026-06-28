import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { getProfile } from "../../services/userService";
import ProfileCard from "../../components/profile/ProfileCard";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();
      setUser(data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto py-20 text-center">
          Loading Profile...
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-10">
          My Profile
        </h1>

        <ProfileCard
          user={user}
          onProfileUpdated={fetchProfile}
        />
      </section>
    </MainLayout>
  );
};

export default Profile;