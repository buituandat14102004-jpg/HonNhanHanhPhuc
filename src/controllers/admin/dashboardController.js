exports.getDashboard = (req, res) => {
  res.render('admin/dashboard', {
    title: 'Hệ Thống Quản Trị - Hôn Nhân Hạnh Phúc'
  });
};
