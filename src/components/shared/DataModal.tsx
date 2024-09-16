import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Check, XCircle } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Input } from "../ui/input";

const DataModal = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex justify-center items-center gap-3 invisible group-hover:visible">
          <Button
            type="button"
            variant="ghost"
            className="font-medium px-3 py-[1.1rem] h-0 border border-[#0AAC6C] flex items-center gap-2"
          >
            <Check className="w-5" />
            Approve
          </Button>

          <Button
            type="button"
            variant="ghost"
            className="font-medium px-3 py-[1.1rem] h-0 border border-[#BE6195] flex items-center gap-2"
          >
            <XCircle className="w-5" />
            Decline
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent className="sm:max-w-xl w-[95vw]">
        <SheetHeader>
          <SheetTitle>New student profile</SheetTitle>
          <ScrollArea className="h-[90vh]">
            <SheetDescription className="">
              <div className="bg-white py-7 px-5 rounded flex justify-between items-center">
                <span className="bg-[#FFE769] border border-[#FFD705] text-[#0B1A2D] font-bold uppercase text-xs py-[1px] px-1">
                  pending approval
                </span>

                <div className="flex justify-center items-center gap-3">
                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#0AAC6C] flex items-center gap-2"
                  >
                    <Check className="w-5" />
                    Approve
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#BE6195] flex items-center gap-2"
                  >
                    <XCircle className="w-5" />
                    Decline
                  </Button>
                </div>
              </div>
              <div className="flex items-stretch gap-4 mt-4">
                <div className="bg-white w-full pt-6 pb-7 px-5 rounded">
                  <span className="block text-[#374258] font-bold mb-4">
                    Identity
                  </span>
                  <span className="block text-xs text-[#75819A]">Name</span>
                  <span className="block text-[#374258] font-semibold mb-4">
                    Kayode Otumba
                  </span>
                  <span className="block text-xs text-[#75819A]">Email</span>
                  <span className="block text-[#374258] font-semibold mb-4">
                    kayode.otumba@gmail.com
                  </span>
                  <span className="inline-block border border-[#0AAC6C] py-2 px-2.5 rounded">
                    Generate student ID
                  </span>
                </div>
                <div className="bg-white w-full pt-6 pb-7 px-5 rounded">
                  <span className="block text-[#374258] font-bold mb-4">
                    Passport image
                  </span>

                  <div className="flex justify-center items-center w-full">
                    <img
                      src="/assets/images/user-icon.png"
                      alt="Profile image"
                      className="w-32"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white w-full py-6 px-5 rounded mt-4">
                <span className="block text-[#374258] font-bold mb-4">
                  Personal information
                </span>

                <div>
                  <span className="block text-xs text-[#75819A] mb-2">
                    Gender
                  </span>
                  <select
                    name="gender"
                    className="w-full border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
                  >
                    <option>Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="mt-5">
                  <span className="block text-xs text-[#75819A] mb-2">
                    Class
                  </span>
                  <select
                    name="class"
                    className="w-full border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
                  >
                    <option>Select</option>
                    <option value="primary1">Primary 1</option>
                    <option value="primary2">Primary 2</option>
                    <option value="primary3">Primary 3</option>
                    <option value="primary4">Primary 4</option>
                    <option value="primary5">Primary 5</option>
                    <option value="primary6">Primary 6</option>
                  </select>
                </div>
              </div>
              <div className="bg-white w-full py-6 px-5 rounded mt-4">
                <span className="block text-[#374258] font-bold mb-5">
                  Contact information
                </span>

                <span className="block text-xs text-[#75819A] mb-1">
                  Phone 1
                </span>
                <Input
                  type="text"
                  placeholder="Ex. 08012345678"
                  className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
                />

                <span className="block text-xs text-[#75819A] mt-6 mb-1">
                  Phone 2
                </span>
                <Input
                  type="text"
                  placeholder="Ex. 08012345678"
                  className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
                />

                <span className="block text-xs text-[#75819A] mt-6 mb-1">
                  Phone 3
                </span>
                <Input
                  type="text"
                  placeholder="Ex. 08012345678"
                  className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
                />
              </div>

              <div className="bg-white w-full py-6 px-5 rounded mt-4">
                <span className="block text-[#374258] font-bold mb-4">
                  Address
                </span>

                <div>
                  <span className="block text-xs text-[#75819A] mb-2">
                    Country
                  </span>
                  <select
                    name="country"
                    className="w-full border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
                  >
                    <option value="nigeria">Nigeria</option>
                    <option value="ghana">Ghana</option>
                    <option value="south-africa">South Africa</option>
                  </select>
                </div>

                <div className="mt-7">
                  <span className="block text-xs text-[#75819A] mb-2">
                    State
                  </span>
                  <select
                    name="state"
                    className="w-full border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
                  >
                    <option>Select</option>
                    <option value="abia">Abia</option>
                    <option value="lagos">Lagos</option>
                    <option value="ibadan">Ibadan</option>
                    <option value="kogi">Kogi</option>
                    <option value="anambra">Anambra</option>
                  </select>
                </div>

                <div className="mt-7">
                  <span className="block text-xs text-[#75819A] mb-2">
                    Area/Province
                  </span>
                  <select
                    name="area_province"
                    className="w-full border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
                  >
                    <option>Select</option>
                    <option value="abia">Abia</option>
                    <option value="lagos">Lagos</option>
                    <option value="ibadan">Ibadan</option>
                    <option value="kogi">Kogi</option>
                    <option value="anambra">Anambra</option>
                  </select>
                </div>

                <span className="block text-xs text-[#75819A] mt-7 mb-1">
                  Street
                </span>
                <Input
                  type="text"
                  placeholder="Ex. 5 Afrilearn Street, Doe area, opposite xyz Bank"
                  className="border-t-0 border-l-0 border-r-0 border-b rounded-none py-0 px-0 outline-none focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#0BC279] focus-visible:ring-0 focus-visible:ring-offset-0 font-semibold placeholder:text-slate-300 placeholder:font-normal"
                />
              </div>
            </SheetDescription>
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default DataModal;
