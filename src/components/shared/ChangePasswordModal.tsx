import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalCloseButton,
} from "@/components/shared/modal";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { token } = useAuthStore();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setError("New passwords do not match");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.patch(
        "https://afrilearn-api-staging.up.railway.app/v1/auth/user/change-password/complete",
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data, "Password changed successfully");
      onClose();
    } catch (error) {
      setError("Failed to change password");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Change Password</ModalTitle>
          <ModalCloseButton onClick={onClose} />
        </ModalHeader>
        <ModalDescription>
          <form onSubmit={handleChangePassword}>
            <div className="mb-4">
              <label className="block text-xs text-[#75819A]">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xs text-[#75819A]">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xs text-[#75819A]">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="flex justify-end">
              <Button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
                disabled={loading}
              >
                {loading ? "Changing..." : "Change Password"}
              </Button>
            </div>
          </form>
        </ModalDescription>
      </ModalContent>
    </Modal>
  );
};

export default ChangePasswordModal;
