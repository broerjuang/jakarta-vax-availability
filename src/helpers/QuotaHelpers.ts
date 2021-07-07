import { Jadwal, KuotaRt } from 'data/types';

export function hasQuota(jadwal: Jadwal[] = []) {
  for (const jadwalItem of jadwal) {
    for (const waktuItem of jadwalItem.waktu ?? []) {
      if (KuotaRt.validate(waktuItem).success) {
        return true;
      }
    }
  }
  return false;
}
