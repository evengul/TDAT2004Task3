# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.10

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/evengul/TDAT2004Task3/server/dockers

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/evengul/TDAT2004Task3/server/dockers

# Include any dependencies generated for this target.
include CMakeFiles/compiled.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/compiled.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/compiled.dir/flags.make

CMakeFiles/compiled.dir/toCompile.cpp.o: CMakeFiles/compiled.dir/flags.make
CMakeFiles/compiled.dir/toCompile.cpp.o: toCompile.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/evengul/TDAT2004Task3/server/dockers/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/compiled.dir/toCompile.cpp.o"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/compiled.dir/toCompile.cpp.o -c /home/evengul/TDAT2004Task3/server/dockers/toCompile.cpp

CMakeFiles/compiled.dir/toCompile.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/compiled.dir/toCompile.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/evengul/TDAT2004Task3/server/dockers/toCompile.cpp > CMakeFiles/compiled.dir/toCompile.cpp.i

CMakeFiles/compiled.dir/toCompile.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/compiled.dir/toCompile.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/evengul/TDAT2004Task3/server/dockers/toCompile.cpp -o CMakeFiles/compiled.dir/toCompile.cpp.s

CMakeFiles/compiled.dir/toCompile.cpp.o.requires:

.PHONY : CMakeFiles/compiled.dir/toCompile.cpp.o.requires

CMakeFiles/compiled.dir/toCompile.cpp.o.provides: CMakeFiles/compiled.dir/toCompile.cpp.o.requires
	$(MAKE) -f CMakeFiles/compiled.dir/build.make CMakeFiles/compiled.dir/toCompile.cpp.o.provides.build
.PHONY : CMakeFiles/compiled.dir/toCompile.cpp.o.provides

CMakeFiles/compiled.dir/toCompile.cpp.o.provides.build: CMakeFiles/compiled.dir/toCompile.cpp.o


# Object files for target compiled
compiled_OBJECTS = \
"CMakeFiles/compiled.dir/toCompile.cpp.o"

# External object files for target compiled
compiled_EXTERNAL_OBJECTS =

compiled: CMakeFiles/compiled.dir/toCompile.cpp.o
compiled: CMakeFiles/compiled.dir/build.make
compiled: CMakeFiles/compiled.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/evengul/TDAT2004Task3/server/dockers/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable compiled"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/compiled.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/compiled.dir/build: compiled

.PHONY : CMakeFiles/compiled.dir/build

CMakeFiles/compiled.dir/requires: CMakeFiles/compiled.dir/toCompile.cpp.o.requires

.PHONY : CMakeFiles/compiled.dir/requires

CMakeFiles/compiled.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/compiled.dir/cmake_clean.cmake
.PHONY : CMakeFiles/compiled.dir/clean

CMakeFiles/compiled.dir/depend:
	cd /home/evengul/TDAT2004Task3/server/dockers && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/evengul/TDAT2004Task3/server/dockers /home/evengul/TDAT2004Task3/server/dockers /home/evengul/TDAT2004Task3/server/dockers /home/evengul/TDAT2004Task3/server/dockers /home/evengul/TDAT2004Task3/server/dockers/CMakeFiles/compiled.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/compiled.dir/depend

