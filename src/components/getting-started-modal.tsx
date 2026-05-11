"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Building2, Phone, Users as UsersIcon, ChevronRight, Clock, Languages, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export function GettingStartedModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay on mount
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-background/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-border/50 bg-background/80 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-6 top-6 z-20 rounded-full p-2 text-muted-foreground hover:bg-muted/50 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Left Side: Grid Background */}
            <div className="relative hidden w-[38%] md:block border-r border-border/20 bg-muted/5 overflow-hidden">
              <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
                <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative z-10 space-y-4 rounded-3xl bg-background/40 p-8 backdrop-blur-3xl border border-white/5 shadow-2xl">
                    <div className="flex gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                    </div>
                    <div className="space-y-1.5 text-center">
                        <p className="text-lg font-semibold text-foreground tracking-tight">Hi KauTryKauCuba 😊</p>
                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em] opacity-70">Welcome to Zoho CRM</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto max-h-[90vh]">
              <div className="mb-10">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Getting Started with <span className="text-primary">jg crm</span>
                </h2>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  Help us personalize your experience by providing a few details about your company.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="company-name" className="text-[13px] font-semibold text-muted-foreground/80 flex items-center gap-2">
                      <Building2 className="h-3.5 w-3.5 text-primary/70" />
                      Company Name
                    </Label>
                    <Input
                      id="company-name"
                      placeholder="Acme Inc."
                      className="h-11 rounded-xl bg-background/40 border-border/40 focus:bg-background/60 transition-all px-4"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[13px] font-semibold text-muted-foreground/80 flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-primary/70" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="h-11 rounded-xl bg-background/40 border-border/40 focus:bg-background/60 transition-all px-4"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employees" className="text-[13px] font-semibold text-muted-foreground/80 flex items-center gap-2">
                      <UsersIcon className="h-3.5 w-3.5 text-primary/70" />
                      Employee Count
                    </Label>
                    <Input
                      id="employees"
                      type="number"
                      placeholder="e.g. 25"
                      className="h-11 rounded-xl bg-background/40 border-border/40 focus:bg-background/60 transition-all px-4"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[13px] font-semibold text-muted-foreground/80 flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-primary/70" />
                      Time Zone
                    </Label>
                    <CustomSelect 
                        defaultValue="(GMT 8:0) Singapore Time (Asia/Singapore)"
                        options={[
                            "(GMT 8:0) Singapore Time (Asia/Singapore)",
                            "(GMT 0:0) London (Europe/London)",
                            "(GMT -5:0) New York (America/New_York)"
                        ]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[13px] font-semibold text-muted-foreground/80 flex items-center gap-2">
                      <Languages className="h-3.5 w-3.5 text-primary/70" />
                      Language
                    </Label>
                    <CustomSelect 
                        defaultValue="English (United States)"
                        options={[
                            "English (United States)",
                            "Malay (Malaysia)",
                            "Chinese (Simplified)"
                        ]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[13px] font-semibold text-muted-foreground/80 flex items-center gap-2">
                      <Globe className="h-3.5 w-3.5 text-primary/70" />
                      Currency Locale
                    </Label>
                    <CustomSelect 
                        defaultValue="Malaysia"
                        options={[
                            "Malaysia",
                            "Singapore",
                            "United States"
                        ]}
                    />
                  </div>

                  <div className="flex items-center space-x-3 pt-2">
                    <Checkbox id="sample-data" className="rounded-md border-border/50 data-[state=checked]:bg-primary" />
                    <Label htmlFor="sample-data" className="text-sm font-semibold text-muted-foreground/90 cursor-pointer select-none">
                      Load Sample data
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 rounded-xl text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all group mt-6">
                  Get Started
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function CustomSelect({ options, defaultValue }: { options: string[], defaultValue: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-11 rounded-xl bg-background/40 border border-border/40 px-4 py-2 text-sm text-left flex items-center justify-between hover:bg-background/60 transition-all"
      >
        <span className="truncate">{selected}</span>
        <ChevronDown className={cn("h-4 w-4 text-muted-foreground/50 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 4, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute z-40 w-full mt-1 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl overflow-hidden py-1"
            >
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-sm text-left transition-colors hover:bg-primary/10",
                    selected === option ? "text-primary font-semibold bg-primary/5" : "text-foreground/80"
                  )}
                >
                  {option}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
