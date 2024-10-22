const formatDate = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', { 
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).split('/').reverse().join('-');
};



const formatBookingData = (booking) => {
  return {
    ...booking,
    check_in_date: formatDate(booking.check_in_date),
    check_out_date: formatDate(booking.check_out_date),
  };
};

module.exports = {
  formatBookingData,
};
