// import { create } from "zustand";
// import axios from "axios";
// import { useAuthStore } from "./authStore"; // Make sure this is where your authStore is defined

// interface User {
//   _id: string;
//   firstname: string;
//   lastname: string;
//   email: string;
//   usertype: string;
//   avatar: string;
//   school_name: string;
//   phone: string;
//   address: string;
//   // Add other fields as necessary
// }

// interface UserStore {
//   user: User | null;
//   loading: boolean;
//   error: string | null;
//   fetchUser: () => Promise<void>;
//   editUserProfile: (updatedUser: Partial<User>) => Promise<void>;
//   updateProfileImage: (imageFile: File) => Promise<void>;
// }

// export const useUserStore = create<UserStore>((set) => ({
//   user: null,
//   loading: false,
//   error: null,
//   fetchUser: async () => {
//     const { token } = useAuthStore.getState();
//     set({ loading: true, error: null });

//     try {
//       const response = await axios.get(
//         "https://afrilearn-api-staging.up.railway.app/v1/users/me",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(response.data.data, "User Data");

//       set({ user: response.data.data.foundUser, loading: false });
//     } catch (error) {
//       set({ error: "Failed to fetch user data", loading: false });
//     }
//   },
//   editUserProfile: async (updatedUser) => {
//     const { token } = useAuthStore.getState();
//     const { user } = useUserStore.getState();

//     if (!user) {
//       set({ error: "No user data available to edit", loading: false });
//       return;
//     }

//     set({ loading: true, error: null });

//     try {
//       const response = await axios.patch(
//         `https://afrilearn-api-staging.up.railway.app/v1/users/${user._id}`,
//         updatedUser,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(response.data, "Updated User Data");

//       set({ user: { ...user, ...updatedUser }, loading: false });
//     } catch (error) {
//       set({ error: "Failed to update user data", loading: false });
//     }
//   },
//   updateProfileImage: async () => {
//     const { token } = useAuthStore.getState();
//     const { user } = useUserStore.getState();

//     if (!user) {
//       set({ error: "No user data available to edit", loading: false });
//       return;
//     }

//     try {
//       const response = await axios.patch(
//         "https://afrilearn-api-staging.up.railway.app/v1/users/profile-image-update",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(response.data, "Updated Profile Image");
//       set({ user: { ...user, avatar: response.data.avatar }, loading: false });
//     } catch (error) {
//       console.error(error.response.data); // Log the error response
//       set({ error: "Failed to update profile image", loading: false });
//     }
//   },
// }));

import { create } from "zustand";
import axios, { AxiosError } from "axios";
import { useAuthStore } from "./authStore"; // Make sure this is where your authStore is defined

interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  usertype: string;
  avatar: string;
  school_name: string;
  phone: string;
  address: string;
  // Add other fields as necessary
}

interface UserStore {
  user: User | null;
  loading: boolean;
  error: string | null;
  userFetched: boolean; // Add the userFetched flag
  fetchUser: () => Promise<void>;
  editUserProfile: (updatedUser: Partial<User>) => Promise<void>;
  updateProfileImage: (imageFile: File) => Promise<void>;
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  loading: false,
  error: null,
  userFetched: false,
  fetchUser: async () => {
    if (get().userFetched) {
      return; // Do not fetch if userFetched is true
    }

    const { token } = useAuthStore.getState();
    set({ loading: true, error: null });

    try {
      const response = await axios.get(
        "https://afrilearn-api-staging.up.railway.app/v1/users/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data, "User Data");

      set({
        user: response.data.data.foundUser,
        loading: false,
        userFetched: true,
      });
    } catch (error) {
      set({ error: "Failed to fetch user data", loading: false });
    }
  },
  editUserProfile: async (updatedUser) => {
    const { token } = useAuthStore.getState();
    const { user } = useUserStore.getState();

    if (!user) {
      set({ error: "No user data available to edit", loading: false });
      return;
    }

    set({ loading: true, error: null });

    try {
      const response = await axios.patch(
        `https://afrilearn-api-staging.up.railway.app/v1/users/${user._id}`,
        updatedUser,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data, "Updated User Data");

      set({ user: { ...user, ...updatedUser }, loading: false });
    } catch (error) {
      set({ error: "Failed to update user data", loading: false });
    }
  },
  updateProfileImage: async (imageFile: File) => {
    const { token } = useAuthStore.getState();
    const { user } = useUserStore.getState();

    if (!user) {
      set({ error: "No user data available to edit", loading: false });
      return;
    }

    const formData = new FormData();
    formData.append("avatar", imageFile); // Change the field name to "avatar"

    try {
      console.log("Updating profile image...", { token, user, imageFile });
      const response = await axios.patch(
        "https://afrilearn-api-staging.up.railway.app/v1/users/profile-image-update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Add the Content-Type header
          },
        }
      );
      console.log("Updated profile image response:", response.data);
      set({ user: { ...user, avatar: response.data.avatar }, loading: false });
    } catch (error) {
      const axiosError = error as AxiosError; // Type assertion
      console.error("Error updating profile image:", axiosError.response?.data);
      set({ error: "Failed to update profile image", loading: false });
    }
  },
}));
