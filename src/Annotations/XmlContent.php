<?php declare(strict_types=1);

/**
 * @license Apache 2.0
 */

namespace Swagger\Annotations;

/**
 * @Annotation
 * Shorthand for a xml response.
 *
 * Use as an Schema inside a Response and the MediaType "application/xml" will be generated.
 */
class XmlContent extends Schema
{
    /**
     * @var object
     */
    public $examples;

    /** @inheritdoc */
    public static $_parents = [];
}