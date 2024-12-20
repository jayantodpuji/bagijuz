const { reactive } = Vue

const translations = {
  en: {
    settingTitle: 'Setting',
    memberTextAreaLabel: 'Write members name separate with comma',
    selectAllText: 'Select All',
    unselectAllText: 'Unselect All',
    submitText: 'Submit',
    reportTitleText: 'Distribution',
    copySuccessMessage: 'Assignment copied to clipboard!',
    readSurahText: 'Read surah',
    fromVerseText: 'from verse',
    toVerseText: 'to verse',
    alertInvalidSettingText: 'Please enter members and select at least one juz.',
    reportHeaderNameText: 'Name',
    reportHeaderSurahText: 'Surah',
    reportHeaderFromVerseText: 'From',
    reportHeaderToVerseText: 'To',
    copyAssignmentText: 'Copy Assignments',
    noReportText: 'No distribution data available. Please submit the settings to generate a report.',
    subTitleText: 'Simplify your Quran recitation journey with Bagijuz. Easily calculate and distribute verses among your group, ensuring you can complete reading Quran together.'
  },
  id: {
    settingTitle: 'Pengaturan',
    memberTextAreaLabel: 'Tuliskan nama anggota pisahkan dengan koma',
    selectAllText: 'Pilih Semua',
    unselectAllText: 'Batal Pilih Semua',
    submitText: 'Kirim',
    reportTitleText: 'Pembagian',
    copySuccessMessage: 'Pembagian telah di salin',
    readSurahText: 'Baca surat',
    fromVerseText: 'dari ayat',
    toVerseText: 'sampai ayat',
    alertInvalidSettingText: 'Silakan masukkan anggota dan pilih setidaknya satu juz.',
    reportHeaderNameText: 'Nama',
    reportHeaderSurahText: 'Surat',
    reportHeaderFromVerseText: 'Dari',
    reportHeaderToVerseText: 'Sampai',
    copyAssignmentText: 'Salin Pembagian',
    noReportText: 'Tidak ada data yang tersedia. Buat pengaturan untuk membuat distribusi.',
    subTitleText: `Sederhanakan perjalanan tilawah Al-Qur'an Anda dengan Bagijuz. Hitung dan distribusikan ayat-ayat dengan mudah di antara anggota kelompok Anda, memastikan Anda dapat menyelesaikan Al-Qur'an bersama-sama`,
  }
}

const i18n = reactive({
  locale: 'id',
  t(key) {
    return translations[this.locale][key]
  },
  setLocale(locale) {
    this.locale = locale
  }
})
