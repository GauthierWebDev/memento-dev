import type { Dispatch, SetStateAction } from "react";

import { createContext, useContext, useEffect, useState } from "react";
import { Button } from "@syntax/Button";
import clsx from "clsx";

type TabType = {
  label: string;
  value: string;
};

type TabsContextType = {
  selectedTab: string;
  selectTab: Dispatch<SetStateAction<string>>;
  tabs: TabType[];
  addTab: (tab: TabType) => void;
};

const TabsContext = createContext<TabsContextType>({
  selectedTab: "",
  selectTab: () => {},
  tabs: [],
  addTab: () => {},
});

export function Tabs({
  defaultSelectedTab = "",
  children,
}: {
  defaultSelectedTab?: string;
  children: React.ReactNode;
}) {
  const [selectedTab, selectTab] = useState(defaultSelectedTab);
  const [tabs, setTabs] = useState<TabType[]>([]);

  const addTab = (tab: TabType) =>
    setTabs((prevTabs) => {
      // Append to the end of the array and make sure it's unique
      if (prevTabs.some((t) => t.value === tab.value)) {
        return prevTabs;
      }

      return [...prevTabs, tab];
    });

  return (
    <TabsContext.Provider
      value={{
        selectedTab,
        selectTab,
        tabs,
        addTab,
      }}
    >
      <div className="relative">
        <div className="max-w-full overflow-x-auto overflow-y-hidden">
          <ul className="!p-0 w-max flex items-stretch gap-1 !m-0" aria-orientation="horizontal" role="tablist">
            {tabs.map((tab) => (
              <li key={tab.value} className="overflow-hidden" role="tab" aria-selected={selectedTab === tab.value}>
                <TabItem tab={tab} isSelected={selectedTab === tab.value} select={() => selectTab(tab.value)} />
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-1 p-2">{children}</div>
      </div>
    </TabsContext.Provider>
  );
}

export function TabItem({ tab, isSelected, select }: { tab: TabType; isSelected: boolean; select: () => void }) {
  return (
    <Button
      variant={isSelected ? "primary" : "secondary"}
      className={clsx("!rounded-md", isSelected && "cursor-default")}
      onClick={select}
    >
      {tab.label}
    </Button>
  );
}

export function TabContent({ label, value, children }: { label: string; value: string; children: React.ReactNode }) {
  const { addTab, selectedTab } = useContext(TabsContext);

  useEffect(() => {
    addTab({ label, value });
  }, []);

  return (
    <div className={clsx("[&>*:first-of-type]:!mt-0", "[&>*:last-of-type]:!mb-0", selectedTab !== value && "hidden")}>
      {children}
    </div>
  );
}
