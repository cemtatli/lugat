import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Tooltip() {
  return (
    <div className="tooltip group relative flex w-full flex-col items-start justify-center gap-2.5 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-200 px-4 py-2.5 dark:bg-gradient-to-r dark:from-yellow-200 dark:via-yellow-300 dark:to-yellow-400 sm:items-center md:flex-row md:gap-4">
      <div className="line-clamp-3 pr-4 text-xs dark:text-yellow-950 sm:text-sm">
        Başta Frontend terimlerini olmak üzere geliştiricilerin bilinmesi gereken terimleri Türkçe
        anlamlarını gösteren, örneklerle açıklayan açık kaynaklı bir sözlük hizmetidir.
      </div>
      <a
        target="_blank"
        className=" shrink-0 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 "
        href="https://github.com/cemtatli/lugat"
      >
        Repo'ya git
      </a>
    </div>
  );
}
