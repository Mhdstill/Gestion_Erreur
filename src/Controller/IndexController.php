<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index()
    {
        return $this->render('index.html.twig',[]);
    }

    /**
     * @Route("/{other}", name="other")
     */
    public function other(){
        return $this->render('error.html.twig',[]);
    }

    /**
     * @Route("/{other}/{other2}", name="other2")
     */
    public function other2(){
        return $this->render('error.html.twig',[]);
    }

    /**
     * @Route("/{other}/{other2}/{other3}", name="other3")
     */
    public function other3(){
        return $this->render('error.html.twig',[]);
    }

    /**
     * @Route("/{other}/{other2}/{other3}/{other4}", name="other4")
     */
    public function other4(){
        return $this->render('error.html.twig',[]);
    }

    /**
     * @Route("/{other}/{other2}/{other3}/{other4}/{other5}", name="other5")
     */
    public function other5(){
        return $this->render('error.html.twig',[]);
    }
}
