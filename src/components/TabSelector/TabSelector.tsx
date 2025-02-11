import styles from "./TabSelector.module.css";

type Tab = "work" | "campus" | "education";

interface TabSelectorProps {
  onTabChange: (tab: Tab) => void;
  activeTab: Tab;
}

const TabSelector = ({ onTabChange, activeTab }: TabSelectorProps) => {
  return (
    <div className={styles.tabContainer}>
      <button
        className={`${styles.tabButton} ${
          activeTab === "work" ? styles.active : ""
        }`}
        onClick={() => onTabChange("work")}
      >
        Work Experience
      </button>
      <button
        className={`${styles.tabButton} ${
          activeTab === "campus" ? styles.active : ""
        }`}
        onClick={() => onTabChange("campus")}
      >
        Campus Involvement
      </button>
      <button
        className={`${styles.tabButton} ${
          activeTab === "education" ? styles.active : ""
        }`}
        onClick={() => onTabChange("education")}
      >
        Education
      </button>
    </div>
  );
};

export default TabSelector;
