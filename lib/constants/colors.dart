import 'package:flutter/material.dart';

class AppThemes {
  static ThemeData light = ThemeData(
    useMaterial3: true,
    brightness: Brightness.light,
    colorScheme: const ColorScheme.light(
      brightness: Brightness.light,
      primary: Color(0xFF202020),
      onPrimary: Color(0xFF505050),
      secondary: Color(0xFFBBBBBB),
      onSecondary: Color(0xFFEAEAEA),
      error: Color(0xFFF32424),
      onError: Color(0xFFF32424),
      background: Color(0xFFF1F2F3),
      onBackground: Color(0xFFFFFFFF),
      surface: Color(0xFF54B435),
      onSurface: Color(0xFF54B435),
    ),
  );

  static ThemeData dark = ThemeData(
    useMaterial3: true,
    brightness: Brightness.dark,
    colorScheme: const ColorScheme.dark(
      primary: Color(0xFFF1F2F3),
      onPrimary: Color(0xFFFFFFFF),
      secondary: Color(0xFFBBBBBB),
      onSecondary: Color(0xFFEAEAEA),
      error: Color(0xFFF32424),
      onError: Color(0xFFF32424),
      background: Color(0xFF202020),
      onBackground: Color(0xFF505050),
      surface: Color(0xFF54B435),
      onSurface: Color(0xFF54B435),
    ),
  );
}
