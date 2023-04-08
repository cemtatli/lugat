import {XMarkIcon} from "@heroicons/react/24/solid";

export default function Tooltip() {
  return (
    <div className="tooltip group relative flex w-full flex-col items-start justify-center gap-2.5 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-200 px-8 py-2.5 dark:bg-gradient-to-r dark:from-yellow-200 dark:via-yellow-300 dark:to-yellow-400 sm:items-center md:flex-row md:gap-4">
      <div className="pr-5 text-xs dark:text-yellow-950 sm:text-sm md:pr-0">
        Başta Frontend terimlerini olmak üzere geliştiricilerin bilinmesi gereken terimleri Türkçe anlamlarını gösteren, örneklerle
        açıklayan açık kaynaklı bir sözlük hizmetidir.
      </div>
      <a
        target="_blank"
        className="mr-2 shrink-0 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 "
        href="https://github.com/cemtatli/lugat">
        Repo'ya git
      </a>
      <XMarkIcon
        onClick={() => {
          document.querySelector(".tooltip").classList.toggle("hidden");
        }}
        aria-hidden="true"
        className="absolute right-3 top-1/2 h-4 w-4 shrink-0 -translate-y-1/2 cursor-pointer rounded-full text-gray-900 transition duration-100 hover:scale-110 hover:text-gray-900 hover:ring-1 hover:ring-gray-900 hover:ring-offset-gray-900 md:bottom-3"
      />
    </div>
  );
}
