"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Keyboard, ArrowLeft, ArrowRight, Smartphone, Info } from "lucide-react";

export function KeyboardHelp(): React.ReactElement {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="fixed bottom-2 left-2 z-50">
      <button
        className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
          isExpanded
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "bg-white/80 text-black hover:bg-white dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Keyboard shortcuts help"
      >
        <Keyboard className="h-4 w-4" />
        <span className="hidden sm:inline">Controls</span>
        <Info className="h-3 w-3 opacity-50" />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full left-0 mb-2 w-64 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800"
          >
            <div className="space-y-3 text-sm text-black dark:text-white">
              <div>
                <h3 className="mb-2 font-medium">Keyboard Navigation</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <kbd className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">
                        <ArrowLeft className="h-3 w-3" />
                      </kbd>
                      <kbd className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">
                        <ArrowRight className="h-3 w-3" />
                      </kbd>
                    </div>
                    <span className="opacity-75">Navigate between slides</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <kbd className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">1</kbd>
                    <span>-</span>
                    <kbd className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">9</kbd>
                    <span className="opacity-75">Jump to slide number</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="mb-2 font-medium">Touch Navigation</h3>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  <span className="opacity-75">Swipe left/right to navigate</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 