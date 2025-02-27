"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useSearchParams } from "next/navigation";

export default function Modal() {
  const [isParamMatched, setIsParamMatched] = useState(false);
  const [isOpen, setIsOpen] = useState(true); 

  const searchParams = useSearchParams();
  const coupon = searchParams.get('coupon');

  useEffect(() => {
    if (coupon === 'FLAT45OFF') {
      setIsParamMatched(true);
    }
  }, [coupon]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    isParamMatched && isOpen ? (
      <div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent
            style={{
              backgroundImage: "url('/imgs/bg-modal.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
              backgroundColor: '#0000007a',
            }}
            className="sm:max-w-[425px] h-80 sm:max-h-80"
          >
            <DialogHeader>
              <DialogTitle className="text-center font-bold text-2xl text-zinc-100 bg-[#ff680082] mt-7 rounded-md">
                Congratulations
              </DialogTitle>
              <DialogDescription className="text-center py-4 font-semibold text-xl text-zinc-100">
                45% OFF Discount Applied
              </DialogDescription>
              <DialogDescription className="text-center pb-4 font-semibold text-sm text-zinc-100">
              Don't Miss This Limited-time Offer, Get The Best Services At Unbeatable Prices. <br></br> <br></br> Grab Your Discount Now
              </DialogDescription>
              <div className="flex justify-center items-center my-4">
                <button 
                  className="bg-orange-500 rounded-lg px-4 py-2 font-semibold text-sm text-white"
                  onClick={closeModal} 
                >
                  Claim Your Discount
                </button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    ) : null
  );
}
