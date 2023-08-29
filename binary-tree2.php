<?php
    class Node {
        
        public $info;
        public $left;
        public $right;
        public $level;

        public function __construct($info) {
            $this->info = $info;
            $this->left = NULL;
            $this->right = NULL;
            $this->level = NULL;
        }
    }

    class SearchBinaryTree {

        public $root;
        public function  __construct() {
            $this->root = NULL;
        }

        public function create($info) {
            if ($this->root == NULL) {
                $this->root = new Node($info);
            } else {
                $current = $this->root;
                while (true) {
                    if ($info < $current->info) {
                        if ($current->left) {
                            $current = $current->left;
                        } else {
                            $current->left = new Node($info);
                            break;
                        }
                    } else if ($info > $current->info) {
                        if ($current->right) {
                            $current = $current->right;
                        } else {
                            $current->right = new Node($info);
                            break;
                        }
                    } else {
                        break;
                    }
                }
            }
        }

        public function findLargestSmallerKey($info) {
            $current = $this->root;
            $result = -1;
            while ($current != NULL) {
                if ($current->info < $info) {
                    $result = $current->info;
                    $current = $current->right;
                } else {
                    $current = $current->left;
                }
            }
            return $result;
        }
    }

    $arr = array(20, 9, 25, 5, 12, 11, 14);
    $tree = new SearchBinaryTree();
    $n = count($arr);
    for ($i = 0; $i < $n; $i++) {
        $tree->create($arr[$i]);
    }
    $result = $tree->findLargestSmallerKey(17);

    echo ("Largest smaller number is " . $result);
?>