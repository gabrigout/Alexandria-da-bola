export type ArchiveCategory = 'liga' | 'copa' | 'clube' | 'jogador';
export type ArchiveFilter = 'todas' | ArchiveCategory;
export interface ArchiveFact { label: string; value: string }
export interface ArchiveEntry {
  id: string; title: string; category: ArchiveCategory; country: string; year: string;
  subtitle: string; summary: string; origin: string; history: string[]; legacy: string;
  facts?: ArchiveFact[]; relatedIds: string[]; sourceLabel: string; sourceUrl: string; status: string;
}
