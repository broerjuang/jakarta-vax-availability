import { Jadwal, KuotaRt } from 'data/types';

export function hasQuota(jadwal: Jadwal[] = []) {
  for (const jadwalItem of jadwal) {
    for (const waktuItem of jadwalItem.waktu ?? []) {
      const { kuota = {} } = waktuItem;
      if (kuota.sisaKuota || kuota.totalKuota) {
        return true;
      }
    }
  }
  return false;
}
