import { ref } from 'vue';

const cache = new Map<string, number>();

export function useNpmDownloads(packageName?: string) {
  const downloads = ref<string | null>(null);
  const error = ref<unknown>(null);
  const isLoading = ref(false);

  // Helper to format numbers (e.g. 1200 -> 1.2k)
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(num);
  };

  const fetchDownloads = async () => {
    if (!packageName) return;

    if (cache.has(packageName)) {
      downloads.value = formatNumber(cache.get(packageName)!);
      return;
    }

    isLoading.value = true;
    try {
      // API for last month downloads
      const response = await fetch(
        `https://api.npmjs.org/downloads/point/last-month/${packageName}`,
      );
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      const count = data.downloads;

      if (typeof count === 'number') {
        cache.set(packageName, count);
        downloads.value = formatNumber(count);
      }
    } catch (e) {
      error.value = e;
      console.error(`Failed to fetch downloads for ${packageName}:`, e);
    } finally {
      isLoading.value = false;
    }
  };

  // Trigger fetch immediately
  fetchDownloads();

  return {
    downloads,
    isLoading,
    error,
  };
}
